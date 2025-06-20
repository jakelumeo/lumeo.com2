import React from "react";
import "../components/styles/Homepage.css";

const Homepage = ({ isDarkMode }) => {
    const theme = isDarkMode ? "theme-dark" : "theme-light";
    const favicons = [
  { name: "Harvard", src: "/icons/harvard.png" },
  { name: "Yale", src: "/icons/yale.png" },
  { name: "Princeton", src: "/icons/princeton.png" },
  { name: "Columbia", src: "/icons/columbia.png" },
  { name: "UPenn", src: "/icons/upenn.png" },
  { name: "Brown", src: "/icons/brown.png" },
  { name: "Cornell", src: "/icons/cornell.png" },
  { name: "Dartmouth", src: "/icons/dartmouth.png" },
  { name: "MIT", src: "/icons/MIT.png" },
  { name: "Stanford", src: "/icons/stanford.png" },
  { name: "Forbes", src: "/icons/forbes.png" },
  { name: "Coinbase", src: "/icons/coinbase.png" },
  
];

     const duplicatedFavicons = Array(6).fill(favicons).flat();
    return (
        <>
            <div className="left-shadow"></div>
            <div className="right-shadow"></div>
            
            <div className={theme}>
                <div className="homepage">
                    <main className="hero">
                        <h1 className="hero-title">
                            Motivation becomes community.<br/>
                            And progress becomes contagious.
                        </h1>
                        
                        <p className="hero-subtitle">
                            It's hard to save alone. That's why Lumeo lets you create and join savings challenges with friends, classmates, or even strangers chasing the same goal.
                        </p>
                        
                        <div className="cta-buttons">
                            <button className="btn btn-primary">
                                Join Waitlist
                            </button>
                            <button className="btn btn-secondary">
                                Contact Us
                            </button>
                        </div>
                    </main>
                    
                    <div className="buildby">
                        <h2>Built by experts from</h2>
                        <div className="favicon-marquee-container">
                            <div className="favicon-marquee">
                                <div className="track">
                                    {duplicatedFavicons.map((favicon, index) => (
                                        <div key={index} className="favicon-container">
                                            <img 
                                                src={favicon.src} 
                                                alt={`${favicon.name} logo`} 
                                                className="favicon"
                                            />
                                            <span className="favicon-name">{favicon.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;