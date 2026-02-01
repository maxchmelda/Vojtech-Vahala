import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#00171F] py-4 sm:py-8 text-center text-white font-lexend relative'>
      <p>&copy; {new Date().getFullYear()} Vojtěch Vahala</p>
      <p className='aboslute text-transparent text-xs'>Made by Max Chmelicek and Adam Hladik</p>
    </footer>
  )
}

export default Footer