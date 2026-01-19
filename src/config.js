// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to update your portfolio content
// After editing, push to GitHub and Vercel will auto-deploy
// ============================================================

export const config = {
  // Personal Information
  personal: {
    name: "Arvind Kumar",
    title: "Full-Stack Developer",
    email: "arvindkum8312@gmail.com",
    phone: "+91 8306962012",
    location: "Ahmedabad, Gujarat, India",
    
    // Short tagline shown in hero
    tagline: "Recent BCA graduate with hands-on experience in HTML, CSS, JavaScript, React.js, and Next.js.",
    
    // Full about/objective text
    objective: `Recent BCA graduate with hands-on experience in HTML, CSS, JavaScript, React.js,Next.js, Node.js, and Express. 
Looking for an entry-level Full-Stack Developer role to contribute to designing and developing 
responsive web applications. Eager to apply my knowledge of modern frontend frameworks and 
best practices in a dynamic software development environment.`,
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/arvind-kumar-a532a3315/",
    github: "https://github.com/CodeWithAviii",
  },

  // CV/Resume Download Link
  // Upload your CV to public folder or use an external link
  cvLink: "/resume/ArvindLatestResume.pdf",

  // EmailJS Configuration (loaded from .env file)
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },

  // Navigation Links (id must match section id in components)
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
}

// Re-export data files for convenience
export { projects } from './data/projects'
export { experience } from './data/experience'
export { education } from './data/education'
export { skills } from './data/skills'
export { certifications } from './data/certifications'
export { achievements } from './data/achievements'
