
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  year: string;
  location: string;
  gpa?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const educationData: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'JECRC University',
    year: '2022 - 2024',
    location: 'Jaipur, Rajasthan',
    gpa: '9.1/10'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'SS Jain Subodh PG College',
    year: '2019 - 2022',
    location: 'Jaipur, Rajasthan',
    gpa: '8.3/10'
  }
];

const certificatesData: Certificate[] = [
  {
    name: 'SQL Basics',
    issuer: 'HackerRank',
    date: 'Jan 2023',
    link: 'https://www.hackerrank.com/'
  },
  {
    name: 'Project Management Skills',
    issuer: 'Coursera',
    date: 'Sep 2022',
    link: 'https://www.coursera.org/'
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container mx-auto px-4">
        {/* Education */}
        <div className="mb-16">
          <h2 className="section-title">Education</h2>
          
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="gradient-border p-5 rounded-lg animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-500/20 p-3 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                    <h4 className="text-lg text-gray-300">{item.school}</h4>
                    
                    <div className="flex flex-wrap items-center gap-x-4 mt-2">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <span>{item.location}</span>
                      </div>
                      
                      {item.gpa && (
                        <div className="text-purple-400 font-medium">
                          GPA: {item.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificates */}
        <div>
          <h2 className="section-title">Certificates</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {certificatesData.map((cert, index) => (
              <div 
                key={index}
                className="gradient-border p-5 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/20 p-3 flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                    <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
                    
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-block mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Show credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
