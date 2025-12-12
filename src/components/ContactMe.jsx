import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ContactForm from "./ContactForm"
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa6"

const ContactMe = () => {
  const bgRef = useRef(null)
  const [isLg, setIsLg] = useState(false)

  /* detect lg breakpoint (>=1024px) */
  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  /* scroll progress for parallax */
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"],
  })

  /* 🔥 stronger parallax, lg only */
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    isLg ? ["-140px", "140px"] : ["0px", "0px"]
  )

  return (
    <div
      id="contact"
      ref={bgRef}
      className="
        relative py-14
        flex flex-col lg:flex-row
        justify-center items-center
        gap-10 overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.img
        src="contact-bg.png"
        alt=""
        style={{ y: bgY }}
        className="
          absolute inset-0
          w-full h-[140%]
          object-cover
          -z-10
          will-change-transform
        "
      />

      {/* FORM */}
      <ContactForm />

      {/* CONTACT INFO CARD */}
      <div
        className="
          z-40 bg-white
          px-8 py-10 md:px-10 md:py-14
          w-[90%] max-[1023px]:max-w-[600px]
          lg:w-[550px]
          flex flex-col gap-6
          font-lexend font-medium
        "
      >
        {/* HEADING */}
        <div
          className="
            pl-2 border-l-4 max-sm:border-l-2
            border-black mb-1
            flex flex-col
            font-lexendMega
            text-xl md:text-2xl
          "
        >
          <h1>Fotograf</h1>
          <h2>Vojtěch Vahala</h2>
        </div>

        {/* ADDRESS + CONTACT */}
        <div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2 flex flex-col gap-2 text-sm md:text-base">
              <h3 className="font-bold">Adresa</h3>
              <p>Město 123,<br />123 45 Město</p>
              <p><b>IČO:</b> 123456</p>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col gap-2 text-sm md:text-base">
              <h3 className="font-bold">Kontakt</h3>

              <div className="flex items-center gap-2">
                <FaPhone />
                <p>+420 123 456 789</p>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p>jmeno.prijmeni@gmail.com</p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-sm md:text-base">
            Fyzická osoba zapsaná v{" "}
            <a className="underline cursor-pointer">
              Živnostenském rejstříku
            </a>
          </p>
        </div>

        {/* SOCIALS */}
        <p className="font-lexendMega text-base md:text-lg">
          Spojme se na sítích!
        </p>

        <div className="flex items-center">
          <a
            href="https://www.instagram.com/vahyn_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={28} className="mr-4 cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/Vahyn/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={28} className="mr-4 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe