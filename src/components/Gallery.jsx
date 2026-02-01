import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../carousel.css";
import { useWindowSize } from "react-use";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Left from '../assets/left.png';
import Right from '../assets/right.png';

export default function Gallery() {
  const { width } = useWindowSize();

  const [imageUrls, setImageUrls] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);

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
        const res = await axios.get("https://cloudinaryapi-64q1.onrender.com/slider");
        setImageUrls(res.data);
      } catch (err) {
        console.error("Error loading slider images:", err);
      }
    };

    loadImages();
  }, []);

  // 2) Reinitializace slideru, když se změní obrázky
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update(); // 🔥 teď slider funguje
    }
  }, [imageUrls, width]);

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, idx) => (
            <img className="keen-slider__slide aspect-square" alt="slider image" src={url} key={idx} />
          ))
        ) : (
          <>
            {[1, 2, 3].map((i) => (
              <div className="keen-slider__slide skeleton-slide" key={i}>
                <div className="skeleton-box text-gray-500">
                  <CircularProgress color="inherit" />
                </div>
              </div>
            ))}
          </> 

        )}
      </div>

      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {sliderLoaded && instanceRef.current?.track?.details?.slides && imageUrls.length > 0 && (
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
