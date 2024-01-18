// Add this section to your main component or page
import React from 'react';
import './Help.css'; // Create a CSS file for styling

function HelpSection() {
  return (
    <section className="help-section bg-gradient-to-r from-gray-700 to-gray-900		">
      <div className="help-content"
      >
        <h2 style={{ fontFamily:'Salsa' }}>We are here to help you!!</h2>
        <p >
          Check out the most common questions our customers asked. Still have
          questions? <span className="contact-link">Contact us</span>.
        </p>
      </div>
    </section>
  );
}

export default HelpSection;
