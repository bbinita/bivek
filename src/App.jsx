import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Outreach from "./components/Outreach.jsx";
// import Contact from "./components/Contact.jsx";
import SkillsAndAwards from "./components/SkillsAndAwards";
import { outreach } from "./data/portfolioData";
import "./styles/App.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Profile Picture */}
      <div className="hero-section">
        <img src="/bivek/bivek.jpg" alt="Profile" className="profile-picture" />
        <div className="hero-text">
          <h1 className="main-title">Bivek Bhusal</h1>
          <p className="subtitle">
            Ph.D. in Plant Science (Applied Remote Sensing and GIS)
          </p>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home"); // default to home

  const sections = {
    home: <Home />,
    about: <About />,
    education: <Education />,
    experience: <Experience />,
    research: <Research />,
    outreach: <Outreach outreach={outreach} />,
    "skills-awards": <SkillsAndAwards />,
    // contact: <Contact social={social} />,
  };

  return (
    <div className="app-container">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="main-content">
        {sections[activeSection] || <Home />}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bivek Bhusal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
