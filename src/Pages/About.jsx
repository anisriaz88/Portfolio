import React from 'react'
import aboutPortrait from '../assets/Img/he.png'
const About = () => {
  const languages = [
    '✓ HTML5', '✓ CSS3', '✓ JavaScript',
  ]

  const skills = [
    '✓ React', '✓ Tailwind CSS', '✓ Node.js', '✓ Express', '✓ MongoDB'
  ]

  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">About Me</h2>
          <div className="mx-auto h-1 w-28 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50 sm:w-40"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left - Image Card */}
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-xs sm:max-w-sm">
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
                <img
                  src={aboutPortrait}
                  alt="Portrait"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent' />
              </div>
            </div>
          </div>

          {/* Right - Description & Skills */}
            <div className="space-y-7 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Who am I?</h1>
            <div className="space-y-4">
              <p className="text-base font-semibold leading-relaxed text-white/75 sm:text-lg">
                I'm Anis Riaz, a MERN stack web developer focused on building clean, responsive, and high-performance web experiences.
              </p>
              <p className="text-base font-semibold leading-relaxed text-white/70 sm:text-lg">
                I enjoy working with modern UI patterns, component-driven development, and thoughtful interactions that feel great to use.
              </p>
            </div>

            {/* Languages Tags */}
            <div>
              <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">Languages</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:cursor-pointer hover:bg-white/5"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>

             {/* Skills Tags */}
            <div>
              <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">Skills</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:cursor-pointer hover:bg-white/5"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About