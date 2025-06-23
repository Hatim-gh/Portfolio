import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import gifImg from '../assets/your-gif.gif';       // your animated gif
import projectImg from '../assets/your-project.png'; // your project screenshot

const Project = () => {
  return (
    <section id="project" className="project">
      <h2>My Project</h2>
      <div className="project-wrapper">

        <motion.div 
          className="project-gif"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={gifImg} alt="Animated Project Demo" />
        </motion.div>

        <motion.div 
          className="project-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="project-text">
            <h3>Career Compass</h3>
            <p>
              In the modern era of technology and evolving job markets, students and professionals often struggle to identify the right career path that aligns with their interests and skills. This project, titled "Career Compass", aims to bridge that gap by offering a smart, user-friendly web application that helps users explore suitable career paths based on their inputs.
            </p>
          </div>
          <div className="project-image">
            <img src={projectImg} alt="Project Screenshot" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Project;
