import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'StallionWear',
      description: 'E-commerce Shopping Website',
      tags: ['React', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
    },
    {
      title: 'AuthGrade System',
      description: 'A user authentication and access control grading system',
      tags: ['React', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
    },
  ]

  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-5xl text-white font-semibold mb-4'>Projects</h2>
          <div className='h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-xl shadow-lg shadow-cyan-500/30' />
          <p className='mx-auto mt-6 max-w-2xl text-white/70'>
            A few selected projects and UI builds. More will be added soon.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg shadow-black/20'
            >
              <h3 className='text-2xl font-bold text-white'><a href="https://stallionwear.netlify.app/" target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
              <p className='mt-3 text-white/70 leading-relaxed'>{project.description}</p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80'
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