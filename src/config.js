// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to update your portfolio content
// After editing, push to GitHub and Vercel will auto-deploy
// ============================================================

export const config = {
  // Personal Information
  personal: {
    name: "Arvind Kumar",
    title: "Frontend Developer",
    email: "arvindkum8312@gmail.com",
    phone: "+91 8306962012",
    location: "Ahmedabad, Gujarat, India",
    
    // Short tagline shown in hero
    tagline: "Recent BCA graduate with hands-on experience in HTML, CSS, JavaScript, React.js, and Next.js.",
    
    // Full about/objective text
    objective: `Recent BCA graduate with hands-on experience in HTML, CSS, JavaScript, React.js, and Next.js. 
Looking for an entry-level Frontend Developer role to contribute to designing and developing 
responsive web applications. Eager to apply my knowledge of modern frontend frameworks and 
best practices in a dynamic software development environment.`,
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/arvindkumar",
    github: "https://github.com/CodeWithAviii",
  },

  // CV/Resume Download Link
  // Upload your CV to public folder or use an external link
  cvLink: "/resume/ArvindLatestResume.pdf",

  // EmailJS Configuration (get these from emailjs.com dashboard)
  emailjs: {
    serviceId: "service_bm9e2xx",      // Replace with your EmailJS service ID
    templateId: "template_ozwrnf4",    // Replace with your EmailJS template ID  
    publicKey: "e5CUoKPYLlSx9RDzc",      // Replace with your EmailJS public key
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
