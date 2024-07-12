import React, { useState } from 'react';
import './Projects.css';
import logoImage1 from './images/ts.png';
import logoImage2 from './images/proj.png';
import logoImage3 from './images/clyde.png';
import logoImage4 from './images/3.png';
import logoImage5 from './images/beezniz logo.png';
import logoImage6 from './images/red.png'

const Projects = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  const handleClosePopup = () => {
    setSelectedLogo(null);
  };

  return (
    <section id="project" className="project-section-project">
      <div>
        <h1>My Projects in Programming</h1>
        <p>This is the project's that I have done in the past years</p>
      </div>
      <div className="logos-container-project">
        <button className="logo-button" onClick={() => handleLogoClick('Logo1')}>
          <img src={logoImage1} alt="Logo1" className="logo-image-project" />
          <h2>Thesis System</h2>
        </button>
        <button className="logo-button" onClick={() => handleLogoClick('Logo2')}>
          <img src={logoImage2} alt="Logo2" className="logo-image-project" />
          <h2>Project System</h2>
        </button>
        <button className="logo-button" onClick={() => handleLogoClick('Logo3')}>
          <img src={logoImage3} alt="Logo3" className="logo-image-project" />
          <h2>Activity System</h2>
        </button>
      </div>
      <div>
      <h1>My Projects in Graphic Design</h1>
      </div>
      <div className="logos-container-project">
        <button className="logo-button" onClick={() => handleLogoClick('Logo4')}>
          <img src={logoImage4} alt="Logo4" className="logo-image-project" />
          <h2>Personal Arts</h2>
        </button>
        <button className="logo-button" onClick={() => handleLogoClick('Logo5')}>
          <img src={logoImage5} alt="Logo5" className="logo-image-project" />
          <h2>Project Arts</h2>
        </button>
        <button className="logo-button" onClick={() => handleLogoClick('Logo6')}>
          <img src={logoImage6} alt="Logo6" className="logo-image-project" />
          <h2>Project Logos</h2>
        </button>
      </div>
      
      {selectedLogo && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>&times;</span>
            {selectedLogo === 'Logo1' && (
              <div>
                <h2>Thesis System</h2>
                <img src={logoImage1} alt="Logo1" className="logo-image-project" />
                
              </div>
            )}
            {selectedLogo === 'Logo2' && (
              <div>
                <h2>Project System</h2>
               <img src={logoImage2} alt="Logo2" className="logo-image-project" />
              </div>
            )}
            {selectedLogo === 'Logo3' && (
              <div>
                <h2>Activity System</h2>
                <img src={logoImage3} alt="Logo3" className="logo-image-project" />
              </div>
            )}
              {selectedLogo === 'Logo4' && (
              <div>
                <h2>Personal Arts</h2>
                <img src={logoImage4} alt="Logo4" className="logo-image-project" />
                
              </div>
            )}
            {selectedLogo === 'Logo5' && (
              <div>
                <h2>Project Arts</h2>
               <img src={logoImage5} alt="Logo5" className="logo-image-project" />
              </div>
            )}
            {selectedLogo === 'Logo6' && (
              <div>
                <h2>Project Logo</h2>
                <img src={logoImage6} alt="Logo6" className="logo-image-project" />
              </div>
            )}
          </div>
          
        </div>
        
      )}
      
      <p>Showcase your projects here.</p>
      
    </section>
  );
};

export default Projects;
