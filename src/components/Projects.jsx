import React from 'react'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader 
          kicker="Projects" 
          title="What I've Built" 
          subtitle="A selection of projects showcasing my frontend development skills." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
