
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: '🐍', category: 'programming' },
  { name: 'SQL', icon: '🗃️', category: 'database' },
  { name: 'Power BI', icon: '📊', category: 'visualization' },
  { name: 'NumPy', icon: '🔢', category: 'library' },
  { name: 'Pandas', icon: '🐼', category: 'library' },
  { name: 'Seaborn', icon: '📈', category: 'visualization' },
  { name: 'Excel', icon: '📑', category: 'tool' },
  { name: 'Data Analysis', icon: '📊', category: 'skill' },
  { name: 'Statistics', icon: '📝', category: 'skill' },
  { name: 'Data Visualization', icon: '📈', category: 'skill' },
  { name: 'Problem Solving', icon: '🧩', category: 'skill' },
  { name: 'Git', icon: '📂', category: 'tool' },
];

const Skills = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm capitalize ${
                filter === category 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="skill-icon flex flex-col items-center justify-center aspect-square"
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
