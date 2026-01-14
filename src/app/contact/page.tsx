'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will be in touch.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] lg:pl-64">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Column - Info */}
        <div className="p-8 lg:p-20 lg:w-1/2 flex flex-col justify-center">
          <h1 className="font-karla text-4xl lg:text-6xl text-black mb-8 lg:mb-12 tracking-wide font-bold">
            GET IN TOUCH
          </h1>

          <p className="font-manrope text-sm lg:text-lg text-gray-700 leading-relaxed max-w-md mb-12">
            For inquiries, collaborations, or to learn more about Asaf Karela&apos;s
            work, please get in touch. We&apos;d love to hear from you!
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                Email
              </p>
              <a
                href="mailto:asafkarela.studio@gmail.com"
                className="text-lg lg:text-2xl text-black font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-colors"
              >
                asafkarela.studio@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                Phone
              </p>
              <p className="text-lg lg:text-xl text-black font-light tracking-wide">
                052-4770272 / 052-8275831
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="p-8 lg:p-20 lg:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              required
              className="w-full bg-transparent py-4 border-b border-gray-300 focus:border-black outline-none transition-colors font-manrope text-sm tracking-wider placeholder:text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL"
              required
              className="w-full bg-transparent py-4 border-b border-gray-300 focus:border-black outline-none transition-colors font-manrope text-sm tracking-wider placeholder:text-gray-400"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="SUBJECT"
              required
              className="w-full bg-transparent py-4 border-b border-gray-300 focus:border-black outline-none transition-colors font-manrope text-sm tracking-wider placeholder:text-gray-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="TELL US ABOUT YOUR PROJECT"
              rows={4}
              required
              className="w-full bg-transparent py-4 border-b border-gray-300 focus:border-black outline-none transition-colors font-manrope text-sm tracking-wider placeholder:text-gray-400 resize-none"
            />

            <button
              type="submit"
              className="bg-black text-white py-4 px-12 text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors mt-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
