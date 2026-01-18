import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MapPin, Linkedin, Github, Loader2, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { config } from '../config'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      )
    }, formRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Check if EmailJS is configured
    if (config.emailjs.serviceId === 'YOUR_SERVICE_ID') {
      // Fallback to mailto if EmailJS not configured
      const body = encodeURIComponent(`Hi Arvind,\n\n${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${config.personal.email}?subject=Portfolio Contact&body=${body}`
      setLoading(false)
      return
    }

    try {
      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        config.emailjs.publicKey
      )

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader 
          kicker="Contact" 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Let's talk!" 
        />
        
        <div ref={formRef} className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className="space-y-6">
            <div className="contact-item">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{config.personal.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{config.personal.location}</span>
                </div>
              </div>
            </div>
            
            <div className="contact-item">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href={config.social.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={config.social.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {status.message && (
              <div className={`contact-item p-4 rounded-xl ${
                status.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
              }`}>
                {status.message}
              </div>
            )}
            
            <div className="contact-item">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
              <input
                className="card w-full"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="contact-item">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
              <input
                className="card w-full"
                placeholder="john@example.com"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="contact-item">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                className="card w-full min-h-[140px] resize-none"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="contact-item">
              <button 
                className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
