import React, { useEffect, useState } from 'react';
import Slider from './../Slider';
import Description from './../Description';
import HomeAdd from './../../HomeAdd';
import HomeColab from './../HomeColab';
import '../Components.css';
import DualVideoPlayer from '../homevid';

function Home() {
  const [showComponents, setShowComponents] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
   
    const iconTimer = setTimeout(() => {
      setShowIcon(false);
    }, 3000);

    const componentsTimer = setTimeout(() => {
      setShowComponents(true);
    }, 3000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(componentsTimer);
    };
  }, []); 

  return (
    <div className="mines">
      {showIcon && (
        <div className="icon-container">
          <i className="fab fa-pied-piper fa-5x glow-animation"></i><span className='glow-animation' style={{fontSize:'1rem' ,marginTop:"30px",fontFamily:"fantasy"}}>Travel Tribe</span>
        </div>
      )}
      {showComponents && (
        <>
          <Slider />
          <Description />
          <HomeAdd />
          <DualVideoPlayer/>
          <HomeColab />
        </>
      )}
    </div>
  );
}

export default Home;
