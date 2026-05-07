import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-md'
      aria-label='Primary'
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10'>
        <NavLink
          to='/'
          className='text-lg font-bold tracking-wide text-white/95 transition hover:text-white sm:text-xl'
          onClick={() => setIsOpen(false)}
        >
          Anis Riaz
        </NavLink>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 md:hidden'
          aria-expanded={isOpen}
          aria-label='Toggle navigation menu'
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <ul className='hidden items-center gap-8 text-sm font-medium text-white/80 md:flex md:gap-10 md:text-base'>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    'inline-flex items-center rounded-md px-2 py-1 transition',
                    'hover:bg-white/5 hover:text-white',
                    isActive ? 'text-white' : 'text-white/80',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='border-t border-white/10 bg-slate-950/90 px-4 py-3 sm:px-6'>
          <ul className='space-y-2 text-sm font-medium text-white/85'>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 transition',
                      'hover:bg-white/5 hover:text-white',
                      isActive ? 'bg-white/10 text-white' : 'text-white/80',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar