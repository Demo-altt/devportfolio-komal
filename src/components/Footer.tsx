
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Komal Mali. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
