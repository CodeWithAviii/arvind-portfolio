import React from 'react'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeader 
          kicker="Career" 
          title="Work Experience" 
          subtitle="My professional journey in frontend development."
        />
        <div className="max-w-3xl">
          <Timeline items={experience} />
        </div>
      </div>
    </section>
  )
}
