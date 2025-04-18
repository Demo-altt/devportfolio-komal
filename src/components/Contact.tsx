
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message (in a real app, use a toast notification)
    alert('Message sent! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-purple-500/20">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Email</h4>
                  <a href="mailto:komal.mali@example.com" className="text-white hover:text-purple-400 transition-colors">
                    komal.mali@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-pink-500/20">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Phone</h4>
                  <a href="tel:+919876543210" className="text-white hover:text-pink-400 transition-colors">
                    +91 9876543210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-blue-500/20">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Location</h4>
                  <p className="text-white">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-gray-300 mb-3">Find me on</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="gradient-border p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
