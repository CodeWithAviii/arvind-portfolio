import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline({ items }) {
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={timelineRef} className="relative pl-8">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="timeline-item relative">
            <div className="absolute left-[-29px] top-6 w-3 h-3 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800 shadow-sm" />
            <div className="card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.role || item.school}</div>
                  <div className="text-primary-600 dark:text-primary-400 font-medium">{item.company || item.place}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{item.period}</div>
              </div>
              {item.points && item.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
