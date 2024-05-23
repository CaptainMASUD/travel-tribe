import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components.css';

function Footer() {
  const location = useLocation();

  const handleprofileclick = () => {
    window.open("https://github.com/CaptainMASUD")
  }
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();

    return () => {
      // Clean up the effect to avoid memory leaks
    };
  }, [location.pathname]); // Trigger the effect on route changes

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-section about">
              <h2>About Travel Tribe</h2>
              <p>
                Travel Tribe is your ultimate destination for unforgettable travel experiences. We are committed to providing exceptional service and ensuring your journey is filled with excitement, adventure, and cultural enrichment.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-section links">
              <h2>Quick Links</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/populardestinations">Destinations</Link></li>
                <li><Link to="/otherservices">Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-section contact-form">
              <h2>Contact Us</h2>
              <form action="#">
                <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: "120px", height: "32px", padding: "0px", borderRadius: "3px", }}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="footer-bottom">
              &copy; 2024 Travel Tribe | Designed by <span className="profile-link" onClick={handleprofileclick}>Masudul Alam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
