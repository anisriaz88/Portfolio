import React from 'react'
import { Link } from 'react-router-dom'

import heroPortrait from '../assets/Img/DP.png'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24'>
      <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
        {/* Content */}
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>
            Hi, I’m <span className='text-cyan-300'>Anis👋</span>
          </h1>
          <h2 className='text-3xl font-bold text-white/95 md:text-5xl'>MERN Stack Web Developer</h2>
          <p className='max-w-xl text-base leading-relaxed text-white/75 md:text-lg'>
            I build modern, responsive, and performance-focused web interfaces.
          </p>

          <div className='flex flex-wrap gap-4'>
            <Link
              to='/projects'
              className='inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60'
            >
              View My Work
            </Link>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30'
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className='flex justify-center lg:justify-end'>
          <div className='relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20'>
            <img
              src={heroPortrait}
              alt='Portrait of Anis'
              className='h-[480px] w-full object-cover object-center'
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