import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'StallionWear',
      description: 'E-commerce Shopping Website',
      url: 'https://stallionwear.netlify.app/',
      tags: ['React', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
    },
    {
      title: 'AuthGrade System',
      description: 'A user authentication and access control grading system',
      url: 'https://authgrade.vercel.app',
      tags: ['React', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
    },
  ]

  return (
    <section className='px-4 py-16 sm:px-6 lg:px-6 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center sm:mb-12'>
          <h2 className='mb-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl'>Projects</h2>
          <div className='mx-auto h-1 w-28 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 sm:w-40' />
          <p className='mx-auto mt-6 max-w-2xl text-sm text-white/70 sm:text-base'>
            A few selected projects and UI builds. More will be added soon.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-black/20 sm:p-6'
            >
              <h3 className='text-xl font-bold text-white sm:text-2xl'>
                <a href={project.url} target='_blank' rel='noopener noreferrer'>
                  {project.title}
                </a>
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-white/70 sm:text-base'>{project.description}</p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 sm:text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects