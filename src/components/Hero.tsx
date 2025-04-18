
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import CodeSnippet from './CodeSnippet';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div>
              <p className="text-purple-400 font-medium mb-2">Hello, This is</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="gradient-text">KOMAL MALI</span>
              </h1>
              <div className="h-1.5 w-40 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-2 rounded-full"></div>
            </div>
            
            <h2 className="text-xl sm:text-2xl text-gray-300">
              An Aspiring <span className="text-pink-400 font-semibold">Data Analyst</span> & <span className="text-blue-400 font-semibold">Tech Enthusiast</span>
            </h2>
            
            <p className="text-gray-400 max-w-lg">
              Passionate about transforming raw data into meaningful insights. Leveraging technical skills to solve complex problems and drive data-driven decisions.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 rounded-md border border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Get Resume
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <CodeSnippet />
          </div>
        </div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
