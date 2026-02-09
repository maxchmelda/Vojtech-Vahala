import { HashLink } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const text = `
  Moravské hody pro mě nejsou jen událostí, ale živou tradicí plnou barev,
  emocí a silných momentů. Baví mě zachycovat atmosféru krojů, tance,
  hudby i radosti lidí, kteří tuto tradici udržují při životě.

  Fotografováním hodů se snažím uchovat jejich jedinečný charakter a
  přirozenou energii tak, aby fotografie vyprávěly příběh i dlouho
  po skončení samotné akce.
`;

const Hody = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse w-full">
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
            Moravské hody
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

          {/* tlacitko */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <HashLink
              to="/gallery#gallery"
              className="max-sm:text-sm py-2 px-6 inline-block rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Zobrazit v galerii
            </HashLink>
          </motion.div>
        </div>
      </div>

      {/* obrazek */}
      <img
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto object-cover"
        src="/hody.jpg"
        alt="Moravské hody"
      />
    </div>
  );
};

export default Hody;
