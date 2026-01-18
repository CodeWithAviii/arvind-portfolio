import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from './SectionHeader'
import { achievements } from '../data/achievements'

gsap.registerPlugin(ScrollTrigger)

export default function Achievements() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.achievement-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
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
    <section ref={sectionRef} id="achievements" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeader
          kicker="Achievements"
          title="Accomplishments"
          subtitle="Milestones and honors I'm proud of."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card card flex items-start gap-4">
              <div className="text-3xl">🏆</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
