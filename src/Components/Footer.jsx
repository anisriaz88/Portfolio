import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-slate-950/80 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between'>
        <div className='space-y-3 text-center lg:text-left'>
          <p className='text-lg font-semibold text-white'>Anis Riaz</p>
          <p className='mx-auto max-w-xl text-sm leading-relaxed text-white/65 lg:mx-0'>
            MERN stack developer building responsive interfaces, polished user experiences, and practical web products.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-2 text-center text-sm font-medium text-white/75 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:justify-end'>
          <Link className='rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white' to='/'>Home</Link>
          <Link className='rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white' to='/about'>About</Link>
          <Link className='rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white' to='/projects'>Projects</Link>
          <Link className='rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white' to='/contact'>Contact</Link>
        </div>
      </div>

      <div className='border-t border-white/10 px-4 py-3 text-center text-[11px] leading-relaxed text-white/50 sm:px-6 sm:py-4 sm:text-xs md:px-10'>
        © 2026 Anis Riaz. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer