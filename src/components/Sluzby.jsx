import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const orderClasses = [
  "order-1",
  "order-2",
  "order-3 sm:order-4 lg:order-3",
  "order-4 sm:order-3 lg:order-4",
  "order-5",
  "order-6",
];

const Sluzby = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t('services.item1.title'),
      text: t('services.item1.text'),
      imageUrl: "/servicesImgs/1.png",
    },
    {
      id: 2,
      title: t('services.item2.title'),
      text: t('services.item2.text'),
      imageUrl: null,
    },
    {
      id: 3,
      title: t('services.item3.title'),
      text: t('services.item3.text'),
      imageUrl: "/servicesImgs/3.png",
    },
    {
      id: 4,
      title: t('services.item4.title'),
      text: t('services.item4.text'),
      imageUrl: null,
    },
    {
      id: 5,
      title: t('services.item5.title'),
      text: t('services.item5.text'),
      imageUrl: "/servicesImgs/2.png",
    },
    {
      id: 6,
      title: t('services.item6.title'),
      text: t('services.item6.text'),
      imageUrl: null,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#111111] min-h-[300px] w-full
                 max-sm:py-10 py-20 relative
                 flex flex-col gap-8 items-center justify-center"
    >
      <h2 className="text-white font-lexendMega text-2xl font-semibold lg:hidden">
        {t('services.title')}
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
            className={`relative group overflow-hidden h-[180px] sm:h-40 z-50 ${orderClasses[index]}`}
          >
            {/* obrazek sluzby */}
            <img
              src={imageUrl ? imageUrl : "/servicesImgs/default.png"}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* overlay s textem */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center gap-4 text-white">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm max-w-[90%]">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sluzby;
