import { HashLink } from "react-router-hash-link";
import { FaBars, FaInstagram, FaXmark } from "react-icons/fa6";
import navBG from "../assets/nav-bg.svg";
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "cs" ? "en" : "cs");
  };

  const closeMenu = () => setOpen(false);

  // renderovani navigacnich odkazu
  const renderLinks = () => (
    <>
      <Link
        to="/"
        onClick={closeMenu}
        className="hover:underline underline-offset-3 max-[1150px]:w-full"
      >
        {t('nav.home')}
      </Link>

      <HashLink
        smooth
        to="/#services"
        onClick={closeMenu}
        className="hover:underline underline-offset-3 max-[1150px]:w-full"
      >
        {t('nav.sluzby')}
      </HashLink>

      <Link
        to="/gallery"
        onClick={closeMenu}
        className="hover:underline underline-offset-3 max-[1150px]:w-full"
      >
        {t('nav.galerie')}
      </Link>

      <HashLink
        smooth
        to="/#about"
        onClick={closeMenu}
        className="hover:underline underline-offset-3 max-[1150px]:w-full"
      >
        {t('nav.omne')}
      </HashLink>

      <HashLink
        smooth
        to="/#contact"
        onClick={closeMenu}
        className="hover:underline underline-offset-3 max-[1150px]:w-full"
      >
        {t('nav.kontakt')}
      </HashLink>

      <button
        onClick={toggleLanguage}
        className="font-bold hover:scale-110 transition-transform cursor-pointer bg-white/10 px-2 py-1 rounded-md text-sm"
      >
        {i18n.language === "cs" ? "EN" : "CS"}
      </button>

      <a
        href="https://www.instagram.com/vahyn_/"
        target="_blank"
        className="hover:scale-110 transition-transform"
        onClick={closeMenu}
      >
        <FaInstagram size={22} />
      </a>
    </>
  );

  return (
    <div className="relative">
      <nav className="relative max-sm:h-16 h-20">
        {/* pozadi navigace */}
        <img
          src={navBG}
          alt="nav-bg"
          className="absolute inset-0 w-full h-full object-cover z-20"
        />

        <div className="max-[1150px]:justify-between max-[1150px]:px-10 max-sm:px-3 relative z-20 h-full flex justify-around items-center">
          <Link
            to="/"
            className="cursor-pointer max-md:text-xs pl-2 border-l-2 mb-1 flex flex-col justify-center font-lexendMega text-sm font-medium items-start"
          >
            <h1>{t('nav.fotograf')}</h1>
            <h2>{t('nav.jmeno')}</h2>
          </Link>

          {/* desktop navigace */}
          <div className="max-[1150px]:hidden flex justify-center mb-1 items-center gap-6 text-white text-[15px]">
            {renderLinks()}
          </div>

          {/* hamburger menu tlacitko */}
          <button
            className="hidden max-[1150px]:flex text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* mobilni menu */}
      {open && (
        <div className="absolute top-18.5 max-sm:top-[59px] min-[1150px]:hidden right-0 max-sm:w-[60%] w-[50%] max-w-[300px] bg-[#00171F] backdrop-blur-md text-white flex flex-col items-start gap-6 py-6 px-6 z-50 font-lexend max-md:text-xs text-sm shadow-xl">
          {renderLinks()}
        </div>
      )}
    </div>
  );
};

export default Navbar;
