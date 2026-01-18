import React from 'react'
import SectionHeader from './SectionHeader'
import { config } from '../config'

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader
          kicker="About Me"
          title="Who I Am"
          subtitle="Passionate about creating beautiful, responsive web experiences."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 My Objective</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {config.personal.objective}
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎓 Education</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Bachelor of Computer Applications (BCA)</div>
                <div className="text-gray-600 dark:text-gray-400">Mohanlal Sukhadia University</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">2022 - 2025 • 82.65%</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="tag">Programming Logic</span>
                <span className="tag">Web Designing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
