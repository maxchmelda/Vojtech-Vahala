import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#00171F] py-4 sm:py-8 text-center text-white font-lexend relative'>
      <p>&copy; {new Date().getFullYear()} Vojtěch Vahala</p>
      <p className='absolute text-transparent text-xs bottom-0 left-1/2 -translate-x-1/2'>Made by Max Chmelicek and Adam Hladik</p>
    </footer>
  )
}

export default Footer