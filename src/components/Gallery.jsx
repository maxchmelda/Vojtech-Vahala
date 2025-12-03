import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../carousel.css";
import { useWindowSize } from "react-use";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

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
            <img className="keen-slider__slide" src={url} key={idx} />
          ))
        ) : (
          <>
            {[1, 2, 3].map((i) => (
              <div className="keen-slider__slide skeleton-slide" key={i}>
                <div className="skeleton-box" >
                  <CircularProgress color="gray" />
                </div>
              </div>
            ))}
          </> 

        )}
      </div>

      {sliderLoaded && instanceRef.current?.track?.details?.slides && (
        <>
          <Arrow
            left
            onClick={() => instanceRef.current.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={() => instanceRef.current.next()}
            disabled={
              currentSlide === instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow({ left, onClick, disabled }) {
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"} ${
        disabled ? "arrow--disabled" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
