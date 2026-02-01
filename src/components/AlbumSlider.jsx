import React, { useEffect, useMemo, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import axios from "axios"
import AlbumModal from "./AlbumModal"
import { LinearProgress } from "@mui/material"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PLACEHOLDER =
  "https://join.travelmanagers.com.au/wp-content/uploads/2017/09/default-placeholder-300x300.png"

/* utils */
const chunkArray = (array, size) => {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

const getPerPage = (w) => {
  if (w < 640) return 1
  if (w < 1024) return 4
  return 6
}

const getViewport = () => {
  if (window.innerWidth < 640) return "mobile"
  if (window.innerWidth < 1024) return "tablet"
  return "desktop"
}

export default function AlbumSlider() {
  const [albums, setAlbums] = useState([])
  const [openedAlbum, setOpenedAlbum] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const [perPage, setPerPage] = useState(getPerPage(window.innerWidth))
  const [viewport, setViewport] = useState(getViewport())

  /* slider */
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  /* resize handling */
  useEffect(() => {
    const onResize = () => {
      setPerPage(getPerPage(window.innerWidth))
      setViewport(getViewport())
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  /* load albums */
  useEffect(() => {
    const loadAlbums = async () => {
      try {
        const res = await axios.get(
          "https://cloudinaryapi-64q1.onrender.com/albums"
        )
        setAlbums(res.data.albums)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    loadAlbums()
  }, [])

  /* pages */
  const pages = useMemo(() => {
    if (albums.length === 0) return []
    return chunkArray(albums, perPage)
  }, [albums, perPage])

  const totalPages = pages.length

  /* navigation rules */
  const useCompactNav =
    viewport === "mobile" ||
    (viewport === "tablet" && totalPages > 8) ||
    (viewport === "desktop" && totalPages > 14)

  /* update slider when pages change */
  useEffect(() => {
    if (!instanceRef.current) return
    instanceRef.current.update()
    instanceRef.current.moveToIdx(0)
    setCurrentSlide(0)
  }, [pages.length])

  return (
    <>
      {/* error */}
      {error && (
        <div className="w-full text-white text-center py-2 max-sm:text-xs">
          Chyba při načítání alb. Zkuste to prosím znovu později.
        </div>
      )}

      {/* slider */}
      <div className="w-full max-w-[1100px] mx-auto lg:px-6 overflow-hidden">
        {isLoading ? (
          <div className="w-full flex items-center justify-center pt-6">
            <div className="w-[60%] sm:w-[40%] lg:w-[30%] text-gray-400">
              <LinearProgress color="inherit" sx={{ borderRadius: 999 }} />
            </div>
          </div>
        ) : (
          <div ref={sliderRef} className="keen-slider">
            {pages.map((page, idx) => (
              <div
                key={idx}
                className="keen-slider__slide w-full min-w-full"
              >
                <div className="grid grid-cols-3 justify-center gap-1
                                max-lg:grid-cols-2
                                max-sm:grid-cols-1">
                  {page.map((album) => (
                    <div
                      key={album.name}
                      onClick={() => setOpenedAlbum(album)}
                      className="relative w-full aspect-4/3
                                overflow-hidden cursor-pointer group" // group je zde důležité
                    >
                      <img
                        src={album.coverImgUrl ?? PLACEHOLDER}
                        alt={album.name}
                        className="w-full h-full object-cover
                                  transition-transform duration-300
                                  group-hover:scale-[1.06]"
                      />
                      
                      <div className="absolute bottom-0 left-0 w-full 
                                      bg-black/85 text-white py-2 px-4
                                      opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-300 pointer-events-none">
                        <span className="text-sm font-medium truncate block font-lexend">
                          {album.name}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* navigation */}
      {loaded && totalPages > 1 && (
        <div className="flex justify-center items-center mt-7">
          {useCompactNav ? (
            /* arrows + page number */
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  instanceRef.current?.moveToIdx(
                    Math.max(currentSlide - 1, 0)
                  )
                }
                disabled={currentSlide === 0}
                className="w-10 h-10 rounded-full bg-neutral-200
                           text-neutral-900 flex items-center justify-center
                           disabled:opacity-40 disabled:cursor-not-allowed
                           hover:scale-105 transition"
              >
                <MdKeyboardArrowLeft size={24} />
              </button>

              <span className="text-sm font-semibold text-neutral-300">
                {currentSlide + 1} / {totalPages}
              </span>

              <button
                onClick={() =>
                  instanceRef.current?.moveToIdx(
                    Math.min(currentSlide + 1, totalPages - 1)
                  )
                }
                disabled={currentSlide === totalPages - 1}
                className="w-10 h-10 rounded-full bg-neutral-200
                           text-neutral-900 flex items-center justify-center
                           disabled:opacity-40 disabled:cursor-not-allowed
                           hover:scale-105 transition"
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          ) : (
            /* dots */
            <div className="flex gap-4 flex-wrap justify-center max-w-full">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-10 h-10 rounded-full font-bold
                              cursor-pointer hover:scale-105 transition-transform
                    ${
                      currentSlide === idx
                        ? "bg-red-700 text-white"
                        : "bg-neutral-200 text-neutral-900"
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* modal */}
      {openedAlbum && (
        <AlbumModal
          album={openedAlbum}
          onClose={() => setOpenedAlbum(null)}
        />
      )}
    </>
  )
}
