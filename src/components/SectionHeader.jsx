import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeader({ kicker, title, subtitle }) {
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={headerRef} className="mb-12">
      <div className="text-sm uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold">{kicker}</div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{title}</h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl text-lg">{subtitle}</p>}
    </div>
  )
}
