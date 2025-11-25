import { FaBars, FaInstagram, FaXmark } from 'react-icons/fa6'
import navBG from '../assets/nav_bg.svg'
import { Link } from 'react-router'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const renderLinks = () => (
        <>
            <Link to="/" onClick={() => setOpen(false)}>home</Link>
            <Link to="/" onClick={() => setOpen(false)}>služby</Link>
            <Link to="/" onClick={() => setOpen(false)}>galerie</Link>
            <Link to="/" onClick={() => setOpen(false)}>o mně</Link>
            <Link to="/" onClick={() => setOpen(false)}>kontakt</Link>

            <a
            href="https://www.instagram.com/vojtech_valhala/"
            target="_blank"
            onClick={() => setOpen(false)}
            >
            <FaInstagram size={22} />
            </a>
        </>
    )

  return (
    <div className="relative">
        <nav className="relative max-sm:h-16 h-20">  
            {/* background image */}
            <img
                src={navBG}
                alt="nav-bg"
                className="absolute inset-0 w-full h-full object-cover z-20"
            />

            {/* content centered over it */}
            <div className="max-sm:justify-between max-sm:px-2 relative z-20 h-full flex justify-around items-center">
                <div className=" max-md:text-xs pl-2 border-l-2 mb-1 flex flex-col justify-center font-lexend text-sm font-medium items-start">
                    <h1>Fotograf</h1>
                    <h2>Vojtěch Valhala</h2>
                </div>

                <div className="max-[1150px]:hidden flex justify-center mb-1 items-center gap-8 text-white">
                    { renderLinks() }
                </div>

                <button
                className="hidden max-[1150px]:flex text-white text-2xl"
                onClick={() => setOpen(!open)}
                >
                {open ? <FaXmark /> : <FaBars />}
                </button>
            </div>

        </nav>

        {open && (
            <div className="absolute top-18.5 max-sm:top-14 right-0 max-sm:w-[60%] w-[50%] max-w-[300px] bg-[#034b63] backdrop-blur-md text-white flex flex-col items-start gap-6 py-6 px-6 z-10 font-lexend max-md:text-xs text-sm shadow-xl">
                { renderLinks() }
            </div>
        )}
    </div>


  )
}

export default Navbar

