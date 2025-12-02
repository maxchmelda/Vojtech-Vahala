import { HashLink } from "react-router-hash-link";

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. In rutrum. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nulla non lectus sed nisl molestie malesuada. Quisque porta. Fusce nibh. Mauris tincidunt sem sed arcu. Integer tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row w-full">

      {/* TEXT BLOCK */}
      <div className="w-full lg:w-1/2 bg-[#00171F] text-white px-8 sm:px-8 py-10 sm:py-16 flex items-center">
        <div className="flex flex-col items-start justify-center gap-8 sm:gap-10 w-full lg:w-[80%] mx-auto font-lexend">
          
          <h2 className="text-2xl md:text-3xl font-lexendMega font-semibold">
            Kdo jsem
          </h2>

          <p className="text-sm md:text-base text-[#838383] leading-relaxed">
            {text}
          </p>

          <div className="flex flex-wrap gap-4">
            <HashLink
              smooth
              to="/#contact"
              className="max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Kontaktujte mě
            </HashLink>

            <button className="max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-[#BC0101] text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
              Ceník služeb
            </button>
          </div>

        </div>
      </div>

      {/* IMAGE */}
      <img
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto object-cover"
        src="/about-pic.png"
      />

    </div>
  )
}

export default AboutMe
