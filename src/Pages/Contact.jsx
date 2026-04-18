import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-5xl text-white font-semibold mb-4'>Contact</h2>
          <div className='h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-xl shadow-lg shadow-cyan-500/30' />
          <p className='mx-auto mt-6 max-w-2xl text-white/70'>
            Want to collaborate or discuss an opportunity? Let’s connect.
          </p>
        </div>

        <div className='mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-lg shadow-black/20'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <p className='text-white/80 leading-relaxed'>
              The fastest way to reach me right now is via GitHub.
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='https://github.com/anisriaz88'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60'
              >
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/anis-riaz/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60'
              >
                LinkedIn
              </a>
              <Link
                to='/projects'
                className='inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30'
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact