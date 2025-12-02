import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form
        className='z-40 flex flex-col gap-4 sm:gap-6 justify-center items-start bg-[#00171F] text-white font-lexend p-6 sm:p-8 max-sm:mx-auto w-[90%] max-[1023px]:max-w-[600px] min-[1023px]:w-[550px]'
    >
        <h2 className='font-lexendMega text-xl sm:text-3xl font-semibold'>Kontaktní<br/>formulář</h2>

        <input 
            type="text" 
            placeholder='Jméno a příjmení *' 
            className='
            text-white 
            max-sm:text-sm
            py-3 
            border-b 
            border-b-white 
            outline-none 
            placeholder-white 
            focus:placeholder-white/60
            w-full
            '
            onChange={() => {}}
        />

        <input 
            type="email" 
            placeholder='E-mail *' 
            className='
            text-white 
            max-sm:text-sm
            py-3 
            border-b 
            border-b-white 
            outline-none 
            placeholder-white 
            focus:placeholder-white/60
            w-full
            '
            onChange={() => {}}
        />

        <input 
            type="text" 
            placeholder='Telefon' 
            className='
            text-white 
            max-sm:text-sm
            py-3 
            border-b 
            border-b-white 
            outline-none 
            placeholder-white 
            focus:placeholder-white/60
            w-full
            '
            onChange={() => {}}
        />

        <input 
            type="text" 
            placeholder='Typ focení' 
            className='
            text-white 
            max-sm:text-sm
            py-3 
            border-b 
            border-b-white 
            outline-none 
            placeholder-white 
            focus:placeholder-white/60
            w-full
            '
            onChange={() => {}}
        />

        <textarea 
            placeholder='Poznámka' 
            rows={4}
            className='
            text-white
            max-sm:text-sm
            py-3 
            border-b 
            border-b-white 
            outline-none 
            placeholder-white 
            focus:placeholder-white/60
            w-full
            resize-none
            '
            onChange={() => {}}
        />

        <button className="mt-2 max-sm:text-sm flex justify-center items-center gap-2 ml-auto py-2 px-6 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>Odeslat</span>
            <FaPaperPlane />
        </button>
    </form>
  )
}

export default ContactForm