import { HashLink } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const text = `
  Jmenuji se Vojtěch Vahala a zaměřuji se na fotografii, která zachycuje přirozené
  emoce a autentické okamžiky. Každé focení beru individuálně a dbám na to, aby se
  lidé před objektivem cítili uvolněně a sami sebou.

  Fotím svatby, portréty, firemní focení i akce. Působím v Brně a na jižní Moravě,
  ale za zajímavými projekty rád přijedu kamkoliv.
`;

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="flex flex-col lg:flex-row w-full">
      {/* textovy blok */}
      <div className="w-full lg:w-1/2 bg-[#00171F] text-white px-8 py-10 sm:py-16 flex items-center">
        <div
          ref={ref}
          className="flex flex-col items-start justify-center gap-8 sm:gap-10 w-full lg:w-[80%] mx-auto font-lexend"
        >
          {/* nadpis */}
          <motion.h2
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-lexendMega font-semibold"
          >
            Kdo jsem
          </motion.h2>

          {/* text */}
          <motion.p
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-sm md:text-base text-[#838383] leading-relaxed"
          >
            {text}
          </motion.p>

          {/* tlacitka */}
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
              className="max-sm:text-sm max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300"
            >
              Kontaktujte mě
            </HashLink>

            <button className="max-sm:text-sm cursor-pointer max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-[#BC0101] text-white hover:scale-105 transition-transform duration-300">
              Ceník služeb
            </button>
          </motion.div>
        </div>
      </div>

      {/* obrazek */}
      <img
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto object-cover"
        src="/about-pic.jpg"
        alt="about me image"
      />
    </div>
  );
};

export default AboutMe;
