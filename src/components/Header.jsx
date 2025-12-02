import { Link } from 'react-router';
import arrowDown from '../assets/header-arrow-down.svg';

const Header = () => {
  return (
    <div
      style={{ 
        backgroundImage: 'url("/header-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="
        w-full 
        h-[350px] 
        sm:h-[500px] 
        md:h-[650px]
        mt-[-7px] 
        flex 
        justify-center 
        items-end
      "
    >
      <div
        className="
          flex 
          flex-col 
          items-center 
          gap-8 
          sm:gap-16 
          md:gap-20 
          mb-[60px] 
          sm:mb-[90px] 
          md:mb-[120px]
        "
      >
        <Link
          to="/gallery"
          className="
            bg-linear-to-r 
            from-black 
            to-red-600 
            py-2 
            px-8 
            sm:py-3 
            sm:px-10
            rounded-full 
            text-white 
            max-sm:text-xs 
            max-[1150px]:text-sm
            text-base 
            shadow-lg 
            shadow-black/40
            hover:cursor-pointer
            hover:scale-105 
            transition 
            duration-300
          "
        >
          Prohlédnout portfolio
        </Link>

        <img
          src={arrowDown}
          alt="arrow down"
          className="
            w-6 
            sm:w-8 
            md:w-10
          "
        />
      </div>
    </div>
  );
};

export default Header;
