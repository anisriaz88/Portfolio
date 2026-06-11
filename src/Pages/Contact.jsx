import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [feedback, setFeedback] = useState(null)
  const clearFeedbackTimeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (clearFeedbackTimeoutRef.current) {
        window.clearTimeout(clearFeedbackTimeoutRef.current)
      }
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const receiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'anis@aup.edu.pk'

    try {
      if (clearFeedbackTimeoutRef.current) {
        window.clearTimeout(clearFeedbackTimeoutRef.current)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: receiverEmail,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to send message')
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setFeedback({
        type: 'success',
        text: 'Your message sent to my inbox.',
      })

      clearFeedbackTimeoutRef.current = window.setTimeout(() => {
        setFeedback(null)
      }, 3000)
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error?.message || 'Message could not be sent right now. Please try again.',
      })
    }
  }

  return (
    <section className='px-4 py-14 sm:px-6 lg:px-6 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8 text-center sm:mb-12'>
          <h2 className='mb-4 text-2xl font-semibold text-white sm:text-4xl lg:text-5xl'>Contact</h2>
          <div className='mx-auto h-1 w-24 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 sm:w-40' />
          <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base'>
            Want to collaborate or discuss an opportunity? Let’s connect.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6'>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-black/20 sm:p-8'>
            <div className='flex flex-col items-center gap-4 text-center sm:gap-6 lg:items-start lg:text-left'>
              <p className='text-sm leading-relaxed text-white/80 sm:text-base'>
                The fastest way to reach me right now is via GitHub, LinkedIn, or the form beside this note.
              </p>

              <div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:max-w-none'>
                <a
                  href='https://github.com/anisriaz88'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60'
                >
                  GitHub
                </a>
                <a
                  href='https://www.linkedin.com/in/anis-riaz/'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60'
                >
                  LinkedIn
                </a>
                <Link
                  to='/projects'
                  className='inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30'
                >
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg shadow-black/20 sm:p-8'
          >
            <div className='space-y-3 sm:space-y-4'>
              <div className='space-y-1 text-center sm:text-left'>
                <h3 className='text-xl font-semibold text-white'>Send a message</h3>
                <p className='text-sm leading-relaxed text-white/65'>
                  Send your message directly through this site and it will land in my inbox.
                </p>
              </div>

              {feedback && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    feedback.type === 'success'
                      ? 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-100'
                      : 'border border-rose-400/30 bg-rose-400/10 text-rose-100'
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              <div>
                <label htmlFor='name' className='mb-2 block text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm sm:normal-case sm:tracking-normal'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full rounded-lg border border-white/10 bg-slate-950/45 px-3 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20 sm:px-4'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='mb-2 block text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm sm:normal-case sm:tracking-normal'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full rounded-lg border border-white/10 bg-slate-950/45 px-3 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20 sm:px-4'
                  placeholder='you@example.com'
                />
              </div>

              <div>
                <label htmlFor='subject' className='mb-2 block text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm sm:normal-case sm:tracking-normal'>
                  Subject
                </label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full rounded-lg border border-white/10 bg-slate-950/45 px-3 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20 sm:px-4'
                  placeholder='Project inquiry'
                />
              </div>

              <div>
                <label htmlFor='message' className='mb-2 block text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm sm:normal-case sm:tracking-normal'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full resize-none rounded-lg border border-white/10 bg-slate-950/45 px-3 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20 sm:px-4'
                  placeholder='Tell me about your idea or opportunity.'
                />
              </div>

              <button
                type='submit'
                disabled={feedback?.type === 'success'}
                className='inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 sm:px-6'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact