import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav
        className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/35 backdrop-blur-md'
        aria-label='Primary'
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10'>
        {/* Logo */}

          <NavLink
            to='/'
            className='text-xl font-bold tracking-wide text-white/95 transition hover:text-white'
          >
            Anis Riaz
          </NavLink>

        {/* Nav Links */}

          <ul className='flex items-center gap-8 text-sm font-medium text-white/80 md:gap-10 md:text-base'>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'inline-flex items-center rounded-md px-2 py-1 transition',
                      'hover:text-white hover:bg-white/5',
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
      </nav>
    </>
  )
}

export default Navbar