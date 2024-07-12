import React from 'react';
import './About.css';
import aboutImage from './images/tf.png'; 
import logoImage1 from './images/phplogo.png';
import logoImage2 from './images/htmllogo.jpg';
import logoImage3 from './images/csslogo.png';
import logoImage4 from './images/jslogo.png';
import logoImage5 from './images/canvalogo.png';
import logoImage6 from './images/GIMP.jpg';
import logoImage7 from './images/pslogo.jpg';
import logoImage8 from './images/Adobelogo.png';


const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={aboutImage} alt="aboutProfile" className="about-image" />
      <div>
      <h2>About Me</h2>
      <p>My Name is Christopher Dale Grapinag Pillora 
        Address: Himamaylan City, Negroes Occidental, Philippines
        Birthday: September 27, 2000. </p>
        <p>My skills and Experties Are</p> 
        <p>Programming Languages: </p> 
        
        <div className="logos-container">
          <h2 className="navbar-brand-about"><img src={logoImage1} alt="Logo1" className="logo-image-about" /></h2>
          <h2 className="navbar-brand-about"><img src={logoImage2} alt="Logo2" className="logo-image-about" /></h2>
          <h2 className="navbar-brand-about"><img src={logoImage3} alt="Logo3" className="logo-image-about" /></h2>
          <h2 className="navbar-brand-about"><img src={logoImage4} alt="Logo4" className="logo-image-about" /></h2>
         
        </div>
        <p>Graphic Design Tool's: </p>

        <div className="logos-container">
        <h2 className="navbar-brand-about"><img src={logoImage5} alt="Logo5" className="logo-image-about" /></h2>
        <h2 className="navbar-brand-about"><img src={logoImage6} alt="Logo6" className="logo-image-about" /></h2>
        <h2 className="navbar-brand-about"><img src={logoImage7} alt="Logo7" className="logo-image-about" /></h2>
        <h2 className="navbar-brand-about"><img src={logoImage8} alt="Logo8" className="logo-image-about" /></h2>
      </div>
      </div>
    </section>
    
  );
};

export default About;
