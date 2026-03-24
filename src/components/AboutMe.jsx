import { HashLink } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

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
            {t('about.title')}
          </motion.h2>

          {/* text */}
          <motion.p
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-sm md:text-base text-[#838383] leading-relaxed"
          >
            {t('about.text')}
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
              {t('about.contactBtn')}
            </HashLink>

            <button className="max-sm:text-sm cursor-pointer max-[407px]:w-[168px] text-center py-2 px-6 rounded-full bg-[#BC0101] text-white hover:scale-105 transition-transform duration-300">
              {t('about.pricingBtn')}
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
