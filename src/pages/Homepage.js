import React, { useEffect, useRef } from "react";
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
    const sectionRefs = useRef([]);

    useEffect(() => {
        const revealSection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new window.IntersectionObserver(revealSection, {
            threshold: 0.15
        });
        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="left-shadow"></div>
            <div className="right-shadow"></div>
            
            <div className={theme}>
                <div className="homepage">
                    <main className="hero" id="hero">
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
                    
                    {/* Features Section */}
                    <section className="features-section" id="features" ref={el => sectionRefs.current[0] = el}>
                        <h2>Features</h2>
                        <ul className="features-list">
                            <li>💡 Create or join savings challenges</li>
                            <li>👥 Invite friends or join public groups</li>
                            <li>📈 Track progress and milestones</li>
                            <li>🏆 Earn rewards for consistency</li>
                        </ul>
                    </section>

                    {/* How It Works Section */}
                    <section className="how-it-works-section" id="how-it-works" ref={el => sectionRefs.current[1] = el}>
                        <h2>How It Works</h2>
                        <ol className="how-it-works-list">
                            <li>Sign up and set your savings goal</li>
                            <li>Join or create a challenge group</li>
                            <li>Track your progress together</li>
                            <li>Celebrate achievements as a team</li>
                        </ol>
                    </section>

                    {/* Testimonials Section */}
                    <section className="testimonials-section" id="testimonials" ref={el => sectionRefs.current[2] = el}>
                        <h2>What People Say</h2>
                        <div className="testimonials-list">
                            <blockquote>
                                "Lumeo made saving fun and social! I finally hit my goal."<br/>
                                <span>- Alex, Student</span>
                            </blockquote>
                            <blockquote>
                                "The group challenges kept me motivated every week."<br/>
                                <span>- Jamie, Young Professional</span>
                            </blockquote>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="contact-section" id="contact-section" ref={el => sectionRefs.current[3] = el}>
                        <h2>Contact Us</h2>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </section>

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