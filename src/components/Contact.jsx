import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to connect, feel free to reach out through any of these platforms:</p>
      
      <div className="contact-links">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hatim23352@gmail.com" className="contact-icon" aria-label="Email">
          <FaEnvelope size={40} />
        </a>
        <a href="https://github.com/Hatim-gh" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/hatim-ghadyali-88285b290/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
