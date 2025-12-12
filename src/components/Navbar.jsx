import { HashLink } from "react-router-hash-link"
import { FaBars, FaInstagram, FaXmark } from 'react-icons/fa6'
import navBG from '../assets/nav-bg.svg'
import { useState } from 'react'
import { Link } from "react-router"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    const renderLinks = () => (
        <>
            <Link to="/" onClick={closeMenu}
                className='hover:underline underline-offset-3 max-[1150px]:w-full'>
                home
            </Link>

            <HashLink smooth to="/#services" onClick={closeMenu}
                className='hover:underline underline-offset-3 max-[1150px]:w-full'>
                služby
            </HashLink>

            <Link to="/gallery" onClick={closeMenu}
                className='hover:underline underline-offset-3 max-[1150px]:w-full'>
                galerie
            </Link>

            <HashLink smooth to="/#about" onClick={closeMenu}
                className='hover:underline underline-offset-3 max-[1150px]:w-full'>
                o mně
            </HashLink>

            <HashLink smooth to="/#contact" onClick={closeMenu}
                className='hover:underline underline-offset-3 max-[1150px]:w-full'>
                kontakt
            </HashLink>

            <a
                href="https://www.instagram.com/vahyn_/"
                target="_blank"
                className='hover:scale-110 transition-transform'
                onClick={closeMenu}
            >
                <FaInstagram size={22} />
            </a>
        </>
    )

    return (
        <div className="relative">
            <nav className="relative max-sm:h-16 h-20">
                <img
                    src={navBG}
                    alt="nav-bg"
                    className="absolute inset-0 w-full h-full object-cover z-20"
                />

                <div className="max-sm:justify-between max-sm:px-2 relative z-20 h-full flex justify-around items-center">
                    <div className="max-md:text-xs pl-2 border-l-2 mb-1 flex flex-col justify-center font-lexendMega text-sm font-medium items-start">
                        <h1>Fotograf</h1>
                        <h2>Vojtěch Vahala</h2>
                    </div>

                    <div className="max-[1150px]:hidden flex justify-center mb-1 items-center gap-8 text-white">
                        {renderLinks()}
                    </div>

                    <button
                        className="hidden  max-[1150px]:flex text-white text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="absolute top-18.5 max-sm:top-[59px] min-[1150px]:hidden right-0 max-sm:w-[60%] w-[50%] max-w-[300px] bg-[#00171F] backdrop-blur-md text-white flex flex-col items-start gap-6 py-6 px-6 z-50 font-lexend max-md:text-xs text-sm shadow-xl">
                    {renderLinks()}
                </div>
            )}
        </div>
    )
}

export default Navbar
