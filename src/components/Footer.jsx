import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#00171F] py-4 sm:py-8 text-center text-white font-lexend'>
        &copy; {new Date().getFullYear()} Vojtěch Vahala
    </footer>
  )
}

export default Footer