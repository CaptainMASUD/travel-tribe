import React, { useEffect, useState } from 'react';
import Slider from './../Slider';
import Description from './../Description';
import HomeAdd from './../../HomeAdd';
import HomeColab from './../HomeColab';
import '../Components.css';

function Home() {
  const [showComponents, setShowComponents] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the icon after 2 seconds
    const iconTimer = setTimeout(() => {
      setShowIcon(false);
    }, 3000);

    // Set a timeout to show components after 4 seconds
    const componentsTimer = setTimeout(() => {
      setShowComponents(true);
    }, 3000);

    // Cleanup functions to clear the timers
    return () => {
      clearTimeout(iconTimer);
      clearTimeout(componentsTimer);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="mines">
      {/* Conditionally render the icon */}
      {showIcon && (
        <div className="icon-container">
          <i className="fab fa-pied-piper fa-5x glow-animation"></i><span className='glow-animation' style={{fontSize:'1rem' ,marginTop:"30px",fontFamily:"fantasy"}}>Travel Tribe</span>
        </div>
      )}

      {/* Load components after the icon is removed */}
      {showComponents && (
        <>
          <Slider />
          <Description />
          <HomeAdd />
          <HomeColab />
        </>
      )}
    </div>
  );
}

export default Home;
