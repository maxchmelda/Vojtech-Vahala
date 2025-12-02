import React from 'react'
import ContactForm from './ContactForm'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div id="contact" className="relative py-14 flex flex-col lg:flex-row justify-center items-center gap-10 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img 
        src="contact-bg.png" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
      />

      {/* FORM */}
      <ContactForm />

      {/* CONTACT INFO CARD */}
      <div className="z-40 bg-white px-8 py-10 md:px-10 md:py-14 
                      w-[90%] max-[1023px]:max-w-[600px] lg:w-[550px] 
                      flex flex-col max-sm:gap-4 gap-6 font-lexend font-medium">

        {/* HEADING */}
        <div className="pl-2 border-l-4 max-sm:border-l-2 border-black mb-1 flex flex-col justify-center font-lexendMega 
        max-sm:text-lg text-xl md:text-2xl font-medium items-start">
          <h1>Fotograf</h1>
          <h2>Vojtěch Vahala</h2>
        </div>

        {/* ADDRESS + CONTACT */}
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-6">

            {/* LEFT SIDE */}
            <div className="w-full sm:w-1/2 flex flex-col gap-2 text-sm md:text-base">
              <h3 className="font-bold">Adresa</h3>
              <p>Město 123,<br/>123 45 Město</p>
              <p><b>IČO:</b> 123456</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full sm:w-1/2 flex flex-col gap-2 text-sm md:text-base">
              <h3 className="font-bold">Kontakt</h3>

              <div className="flex justify-start items-center gap-2">
                <FaPhone />
                <p>+420 123 456 789</p>
              </div>

              <div className="flex justify-start items-center gap-2">
                <FaEnvelope />
                <p>jmeno.prijmeni@gmail.com</p>
              </div>
            </div>

          </div>

          <p className="mt-2 text-sm md:text-base">
            Fyzická osoba zapsaná v <a className="underline cursor-pointer">Živnostenském rejstříku</a>
          </p>
        </div>

        {/* SOCIALS */}
        <p className="font-lexendMega text-base md:text-lg">Spojme se na sítích!</p>

        <div className="flex items-center">
          <FaInstagram size={28} className="mr-4 cursor-pointer" />
          <FaFacebook size={28} className="mr-4 cursor-pointer" />
        </div>
      </div>

    </div>
  )
}

export default ContactMe
