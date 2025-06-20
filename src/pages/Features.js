import React from 'react';
import '../components/styles/Features.css';

const Features = ({ isDarkMode }) => {
  const features = [
    {
      title: "Focus on what you love",
      description: "Let Lumeo handle the complexity of financial sharing and management, so you can spend more time on what matters."
    },
    {
      title: "Automated Sharing",
      description: "Securely share your financial data with anyone, anytime—no manual exports or spreadsheets required."
    },
    {
      title: "50+ Integrations",
      description: "Connect all your credit and debit cards, and manage everything in one place—Lumeo works with all your favorite banks."
    },
    {
      title: "Hyper-personalized Insights with AI",
      description: "Get AI-powered recommendations and spending breakdowns tailored to your unique habits and goals."
    },
    {
      title: "Question Answering",
      description: "Ask Lumeo anything about your finances—instantly get answers, charts, and summaries."
    },
    {
      title: "Financial Swarms",
      description: "Collaborate with family, friends, or partners. Stay accountable and manage group budgets together."
    }
  ];

  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div id="features" className={`features-section ${themeClass}`}>
      <div className="features-header">
        <h2 className="features-title">Features</h2>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;