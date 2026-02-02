import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../carousel.css";
import { useWindowSize } from "react-use";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Left from '../assets/icons/left.png';
import Right from '../assets/icons/right.png';
import { LinearProgress } from "@mui/material";

export default function Gallery() {
  const { width } = useWindowSize();

  const [imageUrls, setImageUrls] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: width > 1024 ? 3 : width > 640 ? 2 : 1,
    },
    loop: true,
    created() {
      setSliderLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // 1) Načtení obrázků z API
  useEffect(() => {
    const loadImages = async () => {
      try {
        setError(false);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/sliders`);
        setImageUrls(res.data);
      } catch (err) {
        console.error("Error loading slider images:", err);
        setError(true);
      }
    };

    loadImages();
  }, []);

  // 2) Reinitializace slideru, když se změní obrázky
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update(); 
    }
  }, [imageUrls, width]);

  return (
    <div className="navigation-wrapper">
      {error ? (
        <div className="w-full aspect-2/1 md:aspect-3/1 min-h-[300px] flex flex-col justify-center items-center bg-neutral-900 text-center">
            <p className="text-white text-center py-2 max-sm:text-xs">Chyba při načítání dat, zkuste obnovit stránku.</p>
        </div>

      ) : imageUrls.length > 0 ? (
        <>
          <div ref={sliderRef} className="keen-slider bg-[#111111]">
             {imageUrls.map((url, idx) => (
                <img className="keen-slider__slide aspect-square" alt="slider image" src={url} key={idx} />
             ))}
          </div>
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
        </>

      ) : (
        <div className="w-full aspect-2/1 md:aspect-3/1 min-h-[300px] flex flex-col justify-center items-center bg-neutral-900 text-center">
            <div className="w-64 max-w-[80%]">
              <p className="mb-4 sm:mb-6 text-neutral-400 font-lexend text-sm sm:text-md font-bold uppercase tracking-[0.3em] animate-pulse">
                Načítání Galerie
              </p>
              <LinearProgress
                sx={{
                  height: 2,
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#ffffff",
                    borderRadius: 999,
                  },
                }}
              />
            </div>
        </div>
      )}

      {!error && sliderLoaded && instanceRef.current?.track?.details?.slides && imageUrls.length > 0 && (
        <>
          <img
            src={Left}
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.prev();
            }}
            className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 h-10 sm:h-15 z-20 cursor-pointer hover:scale-110 transition-transform"
            alt="Previous"
          />
          <img
            src={Right}
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.next();
            }}
            className="absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 h-10 sm:h-15 z-20 cursor-pointer hover:scale-110 transition-transform"
            alt="Next"
          />
        </>
      )}
    </div>
  );
}
