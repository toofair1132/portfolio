import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import logoImage from './images/topelogo.gif'; 
import backgroundMusic from './audio/burn.mp3';

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(
    () => JSON.parse(localStorage.getItem('isPlaying')) ?? true
  );
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    localStorage.setItem('isPlaying', isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <header>
      <audio src={backgroundMusic} ref={audioRef} autoPlay loop />
      <section id="header" className="header-section">
        <nav className="navbar">
          <div className="container-fluid">
            <h2 className="navbar-brand">
              <img src={logoImage} alt="Logo" className="logo-image" />
            </h2>
            <h1 className="navbar-brand">My Portfolio Tope</h1>
            <div className="navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <button onClick={togglePlay} className="music-button">
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
