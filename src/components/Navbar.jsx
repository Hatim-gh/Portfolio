import React from 'react';
import { Moon, Sun } from 'lucide-react';

import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  const handleNavigate = (event, targetPage) => {
    event.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const currentPage = params.get('page') === 'services' ? 'services' : 'home';

    if (currentPage === targetPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const nextUrl =
      targetPage === 'services'
        ? `${window.location.pathname}?page=services`
        : window.location.pathname;

    window.history.pushState({}, '', nextUrl);
    window.dispatchEvent(new Event('app:navigate'));
  };

  const params = new URLSearchParams(window.location.search);
  const isServicesPage = params.get('page') === 'services';

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="site-nav">
        <a
          href="/"
          className={`site-nav-link ${!isServicesPage ? 'active' : ''}`}
          onClick={(event) => handleNavigate(event, 'home')}
        >
          Home
        </a>
        <a
          href="/?page=services"
          className={`site-nav-link ${isServicesPage ? 'active' : ''}`}
          onClick={(event) => handleNavigate(event, 'services')}
        >
          Services
        </a>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
