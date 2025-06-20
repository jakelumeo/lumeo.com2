import React from 'react';
import '../components/styles/Contact.css';

const Contact = ({ isDarkMode }) => {
    const theme = isDarkMode ? "theme-dark" : "light-theme";
  return (
    <div className={`contact-section ${theme}`} id = "contact-section" >
      <h2 className="contact-title">Join the Lumeo Waitlist</h2>
      <p className="contact-subtitle">Be the first to know when Lumeo launches!</p>

      <form className="contact-form">
        <input type="email" placeholder="Enter your email" className="contact-input" />
        <button type="submit" className="btn-primary">Join Waitlist</button>
      </form>

      <footer className="contact-footer">
        © Lumeo Finance. | Talk to us at <a href="mailto:">lumeofinance</a>
      </footer>
    </div>
  );
};

export default Contact;