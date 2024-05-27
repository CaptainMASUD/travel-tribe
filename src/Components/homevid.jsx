import React from 'react';
import { FaPlay } from 'react-icons/fa';

const DualVideoPlayer = () => {
  return (
    <div className="container">
        <h1 style={{marginTop:"80px",marginBottom:"80px",textAlign:"center",color:"#7371d7",fontSize:"2rem"}}>Look for some videos of tours!</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hVU9Jh_4gT4?si=SohzOen5SeIuC4Gg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '10px' }}
            ></iframe>
           
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hVU9Jh_4gT4?si=SohzOen5SeIuC4Gg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '10px' }}
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualVideoPlayer;
