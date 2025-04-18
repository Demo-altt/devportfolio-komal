
import { useState, useEffect } from 'react';

const CodeSnippet = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`code-block animate-glow ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      <pre className="text-gray-300">
        <code>
          <span className="text-pink-400">const</span>{" "}
          <span className="text-blue-400">coder</span> = {"{"}
          <br />
          {"  "}
          <span className="text-purple-400">name</span>:{" "}
          <span className="text-green-400">'Komal Mali'</span>,
          <br />
          {"  "}
          <span className="text-purple-400">skills</span>: [
          <br />
          {"    "}
          <span className="text-green-400">'Python'</span>,{" "}
          <span className="text-green-400">'SQL'</span>,{" "}
          <span className="text-green-400">'Power BI'</span>,
          <br />
          {"    "}
          <span className="text-green-400">'NumPy'</span>,{" "}
          <span className="text-green-400">'Pandas'</span>,{" "}
          <span className="text-green-400">'Seaborn'</span>
          <br />
          {"  "}],
          <br />
          {"  "}
          <span className="text-purple-400">quickLearner</span>:{" "}
          <span className="text-yellow-400">true</span>,
          <br />
          {"  "}
          <span className="text-purple-400">dataDriven</span>:{" "}
          <span className="text-yellow-400">true</span>,
          <br />
          {"  "}
          <span className="text-purple-400">hireable</span>:{" "}
          <span className="text-pink-400">() =&gt;</span>{" "}
          <span className="text-yellow-400">true</span>
          <br />
          {"}"};
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
