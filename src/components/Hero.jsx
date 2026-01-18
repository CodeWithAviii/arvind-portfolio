import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MapPin, Mail, Linkedin, Github } from 'lucide-react'
import { config } from '../config'

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power3.out"
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <header 
      ref={heroRef}
      id="top" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container relative z-10">
        <div ref={contentRef} className="max-w-3xl">
          <div className="text-sm uppercase tracking-widest text-primary-600 dark:text-primary-400 font-medium mb-4">
            {config.personal.title}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            {config.personal.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 leading-relaxed max-w-2xl">
            {config.personal.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{config.personal.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5" />
              <span>{config.personal.email}</span>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a 
              href={config.social.linkedin}
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={config.social.github}
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
