import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Project from './components/Project';
import SectionNavigator from './components/SectionNavigator';
import Services from './components/Services';

const getCurrentPage = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('page') === 'services' ? 'services' : 'home';
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('app:navigate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('app:navigate', handleNavigation);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const isServicesPage = currentPage === 'services';

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      {isServicesPage ? (
        <>
          <Services />
          <Contact />
        </>
      ) : (
        <>
          <Hero />
          <SectionNavigator />
          <About />
          <Skills />
          <Project />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
