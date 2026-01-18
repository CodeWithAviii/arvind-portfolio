import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard({ title, description, tags, link, repo }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="card h-full flex flex-col group"
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        {link && link !== '#' && (
          <a 
            className="btn btn-primary text-sm" 
            href={link} 
            target="_blank" 
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
        {repo && (
          <a 
            className="btn btn-outline text-sm" 
            href={repo} 
            target="_blank" 
            rel="noreferrer"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  )
}
