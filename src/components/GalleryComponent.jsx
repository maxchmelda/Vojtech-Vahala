import { Link } from "react-router";
import AlbumSlider from "./AlbumSlider";
import { useTranslation } from "react-i18next";

const GalleryComponent = () => {
  const { t } = useTranslation();
  return (
    <div
      id="gallery"
      className="
        w-full bg-[#212121] min-h-[200px]
        flex flex-col items-center
        gap-4 sm:gap-6
        py-10 sm:py-14
        px-4 sm:px-6
        font-lexend
        mt-[-7px]
      "
    >
      {/* breadcrumb navigace */}
      <span
        className="
          text-[#707070]
          flex flex-wrap items-center justify-center
          text-xs sm:text-sm md:text-base
          gap-2 sm:gap-4
          text-center
        "
      >
        <Link to="/" className="underline hover:text-white transition">
          {t('nav.home')}
        </Link>
        <span>{">"}</span>
        <span>{t('nav.galerie')}</span>
      </span>

      {/* nadpis */}
      <h2
        className="
          text-white font-lexendMega
          text-2xl sm:text-3xl md:text-4xl
          text-center
        "
      >
        {t('gallery.title')}
      </h2>

      {/* popis */}
      <p
        className="
          text-[#707070] text-center
          text-sm sm:text-base
          max-w-md sm:max-w-lg md:max-w-xl
        "
      >
        {t('gallery.subtitle')}
      </p>

      {/* slider s alby */}
      <div className="w-full mt-2 sm:mt-4">
        <AlbumSlider />
      </div>
    </div>
  );
};

export default GalleryComponent;
