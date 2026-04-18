import React from 'react'
import aboutPortrait from '../assets/Img/dp.png'
const About = () => {
  const languages = [
    '✓ HTML5', '✓ CSS3', '✓ JavaScript',
  ]

  const skills = [
    '✓ React', '✓ Tailwind CSS', '✓ Node.js', '✓ Express', '✓ MongoDB'
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-white font-semibold mb-4">About Me</h2>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-xl shadow-lg shadow-cyan-500/50"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square">
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
            <div className="space-y-8">
            <h1 className="text-3xl text-white font-bold">Who am I?</h1>
            <div className="space-y-4">
              <p className="text-white/75 font-semibold text-lg leading-relaxed">
                I'm Anis Riaz, a MERN stack web developer focused on building clean, responsive, and high-performance web experiences.
              </p>
              <p className="text-white/70 font-semibold text-lg leading-relaxed">
                I enjoy working with modern UI patterns, component-driven development, and thoughtful interactions that feel great to use.
              </p>
            </div>

            {/* Languages Tags */}
            <div>
              <h3 className="text-2xl text-white font-bold mt-8">Languages</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/30 text-cyan-200 text-sm font-medium hover:cursor-pointer hover:bg-white/5 transition-all duration-300"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>

             {/* Skills Tags */}
            <div>
              <h3 className="text-2xl text-white font-bold mt-8">Skills</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/30 text-cyan-200 text-sm font-medium hover:cursor-pointer hover:bg-white/5 transition-all duration-300"
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