import { ExternalLink, Video, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'XCyber – Insurance Assistance Platform',
      description: 'Enterprise web application designed to streamline insurance form processing and management across multiple user roles.',
      features: [
        'Role-based access control for Users, Agents, and Administrators',
        'Dynamic form generation based on insurance provider requirements',
        'Draft management system with real-time collaboration features',
        'Integrated communication workflow for agent-assisted completion'
      ],
      techStack: ['React.js', 'HTML5', 'CSS3'],
      links: {
        demo: 'https://drive.google.com/file/d/1_qGZG95SYuwpKrM7B1f7gXYl2r9Vc2-d/view',
        
      }
    },
    {
      title: 'Right to Justice (RTJ)',
      description: 'Legal technology platform providing multilingual access to legal information and procedural guidance.',
      features: [
        'Advanced search functionality with OCR-based document analysis',
        'Voice-enabled interface for accessibility',
        'Comprehensive legal database covering BNS, BSA, and BNSS sections',
        'Multi-language support across 5 regional languages',
        'Integrated FIR filing guidance and legal procedure workflows'
      ],
      techStack: ['HTML5', 'CSS3', 'AI/ML', 'OCR', 'NLP'],
      links: {
        demo: 'https://drive.google.com/file/d/1qFkw6m27Q21T8-E9D2CGGEy5lDA7XM0I/view',
        github: 'https://github.com/karthigaD-hub/right-to-justice'
      }
    },
    {
      title: 'Chimertech Web Application',
      description: 'Corporate web presence featuring interactive user flows and responsive design architecture.',
      features: [
        'Fully responsive layout optimized for all devices',
        'Interactive UI components and user journey mapping',
        'Modern design system implementation'
      ],
      techStack: ['React.js', 'HTML5', 'CSS3'],
      links: {
        live: 'https://chimertech-ppt.vercel.app',
        github: 'https://github.com/karthigaD-hub/Interactivestoryboardforchimertech'
      }
    }
  ];

  return (
    <section id="projects" className="w-full px-6 py-20 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px,1fr] gap-12 mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Projects
            </h2>
          </div>
          <div>
            <p className="text-2xl text-gray-900 font-light leading-relaxed">
              Selected work demonstrating technical expertise and problem-solving capabilities
            </p>
          </div>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-[200px,1fr] gap-12"
            >
              <div className="pt-1">
                <span className="text-sm text-gray-400 font-light">
                  0{index + 1}
                </span>
              </div>
              
              <div className="border-t border-gray-300 pt-8">
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-4 font-light tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                
                {project.features.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 pl-6 relative font-light">
                          <span className="absolute left-0 top-2 w-3 h-px bg-blue-600"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm text-gray-700 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-normal transition-colors"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                      View Live Demo
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-normal transition-colors"
                    >
                      <Video size={16} strokeWidth={1.5} />
                      Watch Demo Video
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-normal transition-colors"
                    >
                      <Github size={16} strokeWidth={1.5} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}