import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import evento from '../Components/images/evento.png';
import './Components.css'; 

function HomeColab() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Set showCard to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 500); // Adjust the delay as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="homecolabmain">
        <h1>Our Collaborations</h1>
        <div className={`card text-center ${showCard ? 'fade-in' : ''}`} style={{ width: '70%', margin: '0 auto', marginBottom: '20px' }}>
          <div className="card-body">
            <h5 className="card-title">Collaboration with <span className="evento">Evento</span></h5>
            <img src={evento} alt="Evento Logo" className="mb-3" style={{ width: '100px' }} />
            <p className="card-text">
              We are excited to collaborate with Evento to bring you the best experience. If you want to manage any kind of event professionally, you can check out Evento.
            </p>
            <div className="services">
              <h6 className="services-heading">Services:</h6>
              <ul className="services-list">
                <li><span className="service" style={{ backgroundColor: '#d0a769' }}>Event Management</span> - Expert event planning and execution.</li>
                <li><span className="service" style={{ backgroundColor: '#6cb2eb' }}>Catering</span> - Rich and delicious food options for your events.</li>
                <li><span className="service" style={{ backgroundColor: '#f7685b' }}>Decoration</span> - Stunning decoration services to make your event memorable.</li>
                <li><span className="service" style={{ backgroundColor: '#8bc34a' }}>Entertainment</span> - Exciting entertainment options for all ages.</li>
              </ul>
            </div>
            <Button variant="primary btn1" style={{ backgroundColor: '#d0a769', borderColor: '#d0a769', marginRight: '10px' }}>Learn More</Button>
            <Button variant="primary btn2" style={{ backgroundColor: '#d0a769', borderColor: '#d0a769',marginRight: '10px' }}>Visit Evento</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeColab;
