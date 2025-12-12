import { Link } from "react-router"
import { motion, useScroll, useTransform } from "framer-motion"
import arrowDown from "../assets/header-arrow-down.svg"

const Header = () => {
  const { scrollY } = useScroll()

  // jemnější, ale výraznější parallax
  const bgY = useTransform(scrollY, [0, 600], [0, 160])

  return (
    <div
      className="
        relative w-full
        h-[350px] sm:h-[500px] md:h-[650px]
        mt-[-7px]
        overflow-hidden
        flex justify-center items-end
      "
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="
          absolute left-0 right-0
          -top-[20%] h-[140%]
          bg-[url('/header-bg.png')]
          bg-cover bg-center bg-no-repeat
          will-change-transform
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex flex-col items-center
          gap-8 sm:gap-16 md:gap-20
          mb-[60px] sm:mb-[90px] md:mb-[120px]
        "
      >
        <Link
          to="/gallery"
          className="
            bg-linear-to-r from-black to-red-600
            py-3 px-8 sm:px-10
            rounded-full text-white
            max-sm:text-xs max-[1150px]:text-sm text-base
            shadow-lg shadow-black/40
            hover:scale-105 transition duration-300
          "
        >
          Prohlédnout portfolio
        </Link>

        <motion.img
          src={arrowDown}
          alt="arrow down"
          className="w-6 sm:w-8 md:w-10"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}

export default Header
