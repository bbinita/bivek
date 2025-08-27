import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    // { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    // { id: 'contact', label: 'Contact' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' }

  ];
  return (
    <nav className="navbar">
  <div className="nav-container">
    <div className="logo-and-nav">
      <h1 className="logo"    onClick={() => setActiveSection('about')} 
        style={{ cursor: 'pointer' }} >Bivek Bhusal</h1>
      <div className="nav-items">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>

  </div>
</nav>
  );
};

export default Navbar;