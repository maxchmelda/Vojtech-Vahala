import { HashLink } from "react-router-hash-link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const text =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. In rutrum. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nulla non lectus sed nisl molestie malesuada. Quisque porta. Fusce nibh. Mauris tincidunt sem sed arcu. Integer tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const AboutMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div id="about" className="flex flex-col lg:flex-row w-full">
      {/* TEXT BLOCK */}
      <div className="w-full lg:w-1/2 bg-[#00171F] text-white px-8 py-10 sm:py-16 flex items-center">
        <div
          ref={ref}
          className="flex flex-col items-start justify-center gap-8 sm:gap-10 w-full lg:w-[80%] mx-auto font-lexend"
        >
          {/* TITLE */}
          <motion.h2
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-lexendMega font-semibold"
          >
            Kdo jsem
          </motion.h2>

          {/* TEXT */}
          <motion.p
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-sm md:text-base text-[#838383] leading-relaxed"
          >
            {text}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <HashLink
              smooth
              to="/#contact"
              className="max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300"
            >
              Kontaktujte mě
            </HashLink>

            <button className="max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-[#BC0101] text-white hover:scale-105 transition-transform duration-300">
              Ceník služeb
            </button>
          </motion.div>
        </div>
      </div>

      {/* IMAGE */}
      <img
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto object-cover"
        src="/about-pic.png"
        alt="about"
      />
    </div>
  )
}

export default AboutMe
