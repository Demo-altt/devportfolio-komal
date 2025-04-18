
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Zomato Sales with EDA',
    description: 'Exploratory data analysis on Zomato sales data to identify patterns and insights for business strategy.',
    techStack: ['Python', 'Pandas', 'Seaborn', 'Numpy'],
    github: 'https://github.com/',
  },
  {
    title: 'Amazon Prime Video Content Analysis',
    description: 'Analysis of Amazon Prime Video content to understand content distribution and viewer preferences.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Data Cleaning'],
    github: 'https://github.com/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Gradient decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
