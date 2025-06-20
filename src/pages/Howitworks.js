import React, { useState, useEffect } from 'react';
import "../components/styles/Howitworks.css";
import img1 from '../components/images/add_purchase.jpg';
import img2 from '../components/images/budget.jpg';
import img3 from '../components/images/stastics.jpg';

const HowItWorks = ({ isDarkMode }) => {
  const theme = isDarkMode ? "hiw-theme-dark" : "hiw-theme-light";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const appScreenImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % appScreenImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [appScreenImages.length]);

  const features = [
    {
      icon: "📊",
      title: "Unified Account Overview",
      description:
        "Stay on top of your finances with Lumeo's unified dashboard. View balances from all your connected bank accounts—like RBC and CIBC—in one place. Whether you're managing multiple personal accounts or overseeing shared ones, we make it simple to understand your total financial picture at a glance.",
    },
    {
      icon: "🧠",
      title: "Smart Spending Insights",
      description:
        "Track your spending with AI-powered categorization. From shopping to travel to food, visualize where your money is going using clean, color-coded charts. Get detailed breakdowns of each transaction to build healthier financial habits and reach your goals faster.",
    },
    {
      icon: "👁️",
      title: "Shared Account Transparency",
      description:
        "Easily view individual account activity—even for shared accounts. Each user can track transactions like flights, rides, and meals in real-time, fostering transparency and better financial collaboration between partners, families, or roommates.",
    }
  ];

  return (
    <div className={theme}>
      <div id="how-it-works" className="how-it-works"></div>
      <div className="how-it-works-content">
        <div className="hiw-content-grid">
          {/* Left side - Features */}
          <div className="hiw-features-section">
            <h2 className="hiw-main-title">
              <span className="hiw-title-highlight">How It</span> Works
            </h2>

            <div className="hiw-features-list">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`hiw-feature-card ${theme} ${index === currentImageIndex ? 'hiw-feature-active' : ''}`}
                >
                  <div className={`hiw-feature-icon-container ${theme}`} style={{ fontSize: '1.5rem' }}>
                    {feature.icon}
                  </div>
                  <div className="hiw-feature-content">
                    <h3 className={`hiw-feature-title ${theme}`}>{feature.title}</h3>
                    <p className={`hiw-feature-description ${theme}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right side - Mobile App Preview */}
          <div className="hiw-mobile-preview-section">
            <img
              src={appScreenImages[currentImageIndex]}
              alt={`App screen ${currentImageIndex + 1}`}
              className="hiw-phone-container-static"
              style={{
                width: '320px',
                height: '620px',
                borderRadius: '1.5rem',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;