import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

const data = [
  {
    id: 1,
    title: "Moravské hody",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: "/servicesImgs/1.png",
  },
  {
    id: 2,
    title: "Akce a festivaly",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: null,
  },
  {
    id: 3,
    title: "Portréty",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: "/servicesImgs/3.png",
  },
  {
    id: 4,
    title: "Firemní portréty",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: null,
  },
  {
    id: 5,
    title: "Svatby a oslavy",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: "/servicesImgs/2.png",
  },
  {
    id: 6,
    title: "Reklamní focení",
    text: "Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.",
    imageUrl: null,
  },
]

const Sluzby = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      className="bg-[#111111] min-h-[300px] w-full
                 max-sm:py-10 py-20 relative
                 flex flex-col gap-8 items-center justify-center"
    >
      <h2 className="text-white font-lexendMega text-2xl font-semibold lg:hidden">
        Služby
      </h2>

      <div
        ref={ref}
        className="
          lg:absolute lg:bottom-[-70px]
          gap-6 sm:gap-4 lg:gap-0
          w-[90%] md:w-[80%] lg:w-[70%]
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {data.map(({ id, title, text, imageUrl }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.08,
            }}
            className="relative group overflow-hidden h-[180px] sm:h-40 z-50"
          >
            {/* IMAGE */}
            <img
              src={imageUrl ? imageUrl : "/servicesImgs/default.png"}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center gap-4 text-white">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm max-w-[90%]">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Sluzby