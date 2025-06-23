import React from 'react';
import './Skills.css';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import gitLogo from '../assets/git.png';
import mlLogo from '../assets/ml.png';
import javaLogo from'../assets/java.png';
import expressLogo from '../assets/express.png';


const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'Machine Learning', logo: mlLogo },
  {name:'Java Language',logo:javaLogo},
  {name:'Express',logo:expressLogo},
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
