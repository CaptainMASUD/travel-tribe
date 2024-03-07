import React from 'react';
import '../Components.css';

function Footer() {
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-section contact-form">
              <h2>Contact Us</h2>
              <form action="#">
                <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="footer-bottom">
              &copy; 2024 Travel Tribe | Designed by Alpha
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
