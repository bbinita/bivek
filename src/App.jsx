import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About.jsx';   
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Research from './components/Research.jsx';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'education': return <Education />;
       case 'experience': return <Experience />;
      case 'research': return <Research />;
      case 'publications': return <Publications />;
      case 'skills': return <Skills />;
      case 'awards': return <Awards />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      
       <footer className="footer">
        <p>© {new Date().getFullYear()} Bivek Bhusal. All rights reserved.</p>
      </footer>
    </div>
  );

  
}

export default App;