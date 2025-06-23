import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Project from './components/Project';



const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact/>
     
      
    </>
  );
};

export default App;
