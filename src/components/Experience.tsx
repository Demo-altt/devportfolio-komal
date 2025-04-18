
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experienceData: Experience[] = [
  {
    position: "Data Analytics Intern",
    company: "Tech Solutions Inc.",
    period: "May 2023 - Aug 2023",
    location: "Jaipur, India",
    description: [
      "Analyzed customer data to identify trends and patterns using SQL and Python.",
      "Created interactive dashboards with Power BI to visualize key business metrics.",
      "Collaborated with cross-functional teams to deliver data-driven insights."
    ]
  },
  {
    position: "Research Assistant",
    company: "University Data Lab",
    period: "Jan 2023 - Apr 2023",
    location: "Remote",
    description: [
      "Assisted in data collection and preprocessing for research projects.",
      "Implemented statistical analysis using Python libraries including NumPy and Pandas.",
      "Documented research findings and contributed to technical reports."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden sm:block"></div>
          
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-6 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden sm:block relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              
              <div className="flex-1 gradient-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                <h4 className="text-lg text-purple-400">{exp.company}</h4>
                
                <div className="flex flex-wrap items-center gap-x-4 mt-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div>
                    {exp.location}
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="mr-2 text-purple-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
