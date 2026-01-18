import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from './SectionHeader'
import { skills } from '../data/skills'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { key: 'technical', label: 'Technical Skills', icon: '💻' },
  { key: 'frameworks', label: 'Frameworks & Libraries', icon: '⚛️' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
  { key: 'soft', label: 'Soft Skills', icon: '🤝' },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeader
          kicker="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to bring ideas to life."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ key, label, icon }) => (
            <div key={key} className="skill-card card">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
