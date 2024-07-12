import React, { useState } from 'react';
import './Contact.css'; 
import logoImage2 from './images/fb.png'; 
import logoImage1 from './images/gmail.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted', { name, email, message });
  };

  return (
    <section id="contact" className="contact-section">
       <div className="logos-container">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="navbar-brand-contact">
          <img src={logoImage1} alt="Logo1" className="logo-image-contact" />
        </a>
        <a href="https://anotherexample.com" target="_blank" rel="noopener noreferrer" className="navbar-brand-contact">
          <img src={logoImage2} alt="Logo2" className="logo-image-contact" />
        </a>
      </div>
      <h1>Contact Me Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      </form>
   
      <footer className="footer-section">
        
      <p className="footer-text">&copy; 2024 My Portfolio Tope. All Rights Reserved.</p>
    </footer>
    </section>
    
  );
};

export default Contact;
