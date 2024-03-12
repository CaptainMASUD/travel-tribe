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
          <div className="section-content" style={{ textAlign: 'center' }}>
  <p>
    Travel Tribe is the premier travel and tourism company, committed
    to providing unparalleled experiences for travelers worldwide.
    With a reputation for excellence and a dedication to customer
    satisfaction, we offer a comprehensive range of services to make
    your travel dreams a reality.
  </p>
  <p>
    Whether you're seeking adventure, relaxation, or cultural
    immersion, <span className="important">Travel Tribe</span> has you
    covered. Our team of experienced professionals meticulously
    curates every aspect of your journey, ensuring a seamless and
    unforgettable experience from start to finish.
  </p>
</div>

        </div>
        <h1 className="student-heading">
         <i class="fa-solid fa-sun fa-spin fa-spin-reverse"></i> Our Services{" "}
        </h1>
        {/* Additional Cards */}
        <div className="cards-section">
          <div className="card">
          <i style={{marginBottom:"7px"}} class="fa-solid fa-calendar-check fa-2x"></i>
            <h2> Event Booking</h2>
          </div>
          <div className="card">
          <i class="fa-solid fa-star fa-2x"></i>
            <h2> Popular Packages</h2>
          </div>
          <div className="card">
          <i class="fa-solid fa-car  fa-2x"></i>
            <h2> Vehicle Service</h2>
          </div>
          <div className="card">
          <i class="fa-solid fa-shield fa-2x"></i>
            <h2> Seucure Payment</h2>
          </div>
        </div>
        <div className="section student-section">
          <h1 className="student-heading">Special Packages for Students</h1>
          <div className="section-content" style={{ textAlign: 'center' }}>
            <p>
              At <span className="important">Travel Tribe</span>, we understand
              the importance of exploration and discovery for students. That's
              why we offer special packages tailored specifically for student
              travelers. These packages combine educational opportunities with
              exciting adventures, providing students with enriching experiences
              that they'll cherish for a lifetime.
            </p>
            <p>
              Whether it's a cultural exchange program, an eco-adventure, or a
              study abroad excursion, our student packages cater to diverse
              interests and budgets. Join us on an unforgettable journey and
              unlock new horizons with{" "}
              <span className="important">Travel Tribe</span>.
            </p>
          </div>
        </div>
        <h1 className="student-heading">
          <i className="fa-brands fa-servicestack fa-bounce"></i> Our Packages{" "}
        </h1>
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
