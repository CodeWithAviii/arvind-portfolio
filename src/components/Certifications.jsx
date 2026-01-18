import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from './SectionHeader'
import { certifications } from '../data/certifications'

gsap.registerPlugin(ScrollTrigger)

export default function Certifications() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
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
    <section ref={sectionRef} id="certifications" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader
          kicker="Certifications"
          title="Credentials"
          subtitle="Professional certifications I've earned."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card card text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
