import React from "react";
import "./Components.css";
import { useNavigate } from "react-router-dom";

function Description() {
  const navigate = useNavigate();

  const handledetails = () => {
    navigate("/populardestinations");
  };

  const handlecustom = () => {
    window.scrollTo(0, 0);
    navigate("/custompackages");
  };

  return (
    <div className="dmian">
      <div className="description-container">
        <div className="section">
          <h1 className="section-heading">
            About <span className="highlight">Travel Tribe</span>
          </h1>
          <div className="section-content" style={{ textAlign: "justify" }}>
            <p>
              Travel Tribe is the premier travel and tourism company, committed
              to providing unparalleled experiences for travelers worldwide.
              With a reputation for excellence and a dedication to customer
              satisfaction, we offer a comprehensive range of services to make
              your travel dreams a reality. Whether you're seeking adventure, relaxation, or cultural
              immersion, <span className="important">Travel Tribe</span> has you
              covered.
            </p>
          </div>
        </div>
        <h1 className="student-heading">
          <i className="fa-solid fa-sun fa-spin fa-spin-reverse"></i> Our Services{" "}
        </h1>
        {/* Button Cards with Logos */}
        <div className="cards-section">
          <button className="card" style={{ animation: "fade-in 0.5s forwards" }}>
            <i style={{ marginBottom: "7px" }} class="fa-solid fa-calendar-check fa-2x"></i>
            <h2> Destination Booking</h2>
          </button>
          <button className="card" style={{ animation: "fade-in 0.5s forwards" }}>
            <i class="fa-solid fa-star fa-2x"></i>
            <h2> Popular Tour Packages</h2>
          </button>
          <button className="card" style={{ animation: "fade-in 0.5s forwards" }}>
            <i class="fa-solid fa-car  fa-2x"></i>
            <h2> Vehicle Service</h2>
          </button>
          <button className="card" style={{ animation: "fade-in 0.5s forwards" }}>
            <i class="fa-solid fa-shield fa-2x"></i>
            <h2> Secure Payment</h2>
          </button>
        </div>
       

        {/* Cards Section */}
        <div className="cards-section">
          <div className="card">
            <i className="fa-solid fa-medal fa-3x ch"></i>
            <h2> Standard Package</h2>
            <button onClick={handledetails}>Check Details</button>
          </div>
          <div className="card">
            <i className="fa-solid fa-crown fa-3x ch"></i>
            <h2> Deluxe Package</h2>
            <button onClick={handledetails}>Check Details</button>
          </div>
          <div className="card">
            <i className="fa-solid fa-ranking-star fa-3x ch"></i>
            <h2> Premium Package</h2>
            <button onClick={handledetails}>Check Details</button>
          </div>
          <div className="card">
            <i className="fa-solid fa-gear fa-spin fa-2x"></i>
            <h2> Custom Package</h2>
            <button onClick={handlecustom}>Check Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
