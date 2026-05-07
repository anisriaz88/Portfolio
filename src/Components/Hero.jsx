import React from 'react'
import { Link } from 'react-router-dom'

import heroPortrait from '../assets/Img/he.png'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-24'>
      <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12'>
        {/* Content */}
        <div className='space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl'>
            Hi, I’m <span className='text-cyan-300'>Anis👋</span>
          </h1>
          <h2 className='text-2xl font-bold text-white/95 sm:text-3xl md:text-5xl'>MERN Stack Web Developer</h2>
          <p className='mx-auto max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg lg:mx-0'>
            I build modern, responsive, and performance-focused web interfaces.
          </p>

          <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <Link
              to='/projects'
              className='inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 sm:w-auto'
            >
              View My Work
            </Link>
            <Link
              to='/contact'
              className='inline-flex w-full items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 sm:w-auto'
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className='order-first flex justify-center lg:order-none lg:justify-end'>
          <div className='relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 sm:max-w-md'>
            <img
              src={heroPortrait}
              alt='Portrait of Anis'
              className='aspect-[4/5] h-auto w-full object-cover object-center sm:aspect-[5/6]'
              loading='eager'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero