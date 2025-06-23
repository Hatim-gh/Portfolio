import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import schoolImg from '../assets/school.png';
import uniImg from '../assets/university.png';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>My Education</h2>
      <div className="education-cards">
        <motion.div 
          className="edu-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="edu-img-wrapper">
            <img src={schoolImg} alt="School" />
          </div>
          <h3>School</h3>
          <p>MSB Educational Institute<br />Completed: 2022</p>
        </motion.div>

        <motion.div 
          className="edu-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="edu-img-wrapper">
            <img src={uniImg} alt="University" />
          </div>
          <h3>University</h3>
          <p>Medicaps University<br />B.Tech in CSE - 2022  Graduation Year : 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
