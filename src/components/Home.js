import React from 'react';
import './Home.css';
import profileImage from './images/profile.png'; 


const Home = () => {
  return (
    <section id="home" className="home-section">
      <audio src="./portfolio-tope/src/Chris Grey - LET THE WORLD BURN (Official Lyric Video) (320).mp3" autoPlay loop />
      <div>
      <h1>Step Inside My Portfolio</h1>
      <h2>Where Vision Meets Execution</h2>
      <p>"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking." – Steve Jobs
        </p><p>Hi, I'm Christopher Dale G. Pillora, a Student of Central Philippines State University. Taking up Bachelor in Science in Information Technology. </p><p></p>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </section>
  );  
};

export default Home;
