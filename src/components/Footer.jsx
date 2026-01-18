import React from 'react'
import { config } from '../config'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            © <span>{new Date().getFullYear()}</span> {config.personal.name} · Built with React & Tailwind CSS
          </div>
          <div className="flex gap-6">
            <a 
              href={config.social.linkedin}
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={config.social.github}
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${config.personal.email}`}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
