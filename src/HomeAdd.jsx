import React, { useState } from "react";
import sajek from "./Components/images/Homeadd/sajek.jpg";
import sajek2 from "./Components/images/Homeadd/sajek2.jpg";
import sylhet from "./Components/images/Homeadd/sylhet.jpg";
import bandarban from "./Components/images/Homeadd/bandarban.jpg";
import img4 from "./Components/images/slider/2.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


function HomeAdd() {
  const [loved, setLoved] = useState([false, false, false, false]);

  const toggleLove = (index) => {
    setLoved((prev) => {
      const newLoved = [...prev];
      newLoved[index] = !newLoved[index];
      return newLoved;
    });
  };

  const places = [
    {
      img: bandarban,
      name: "Bandarban",
      description: "Bandarban, in southeastern Bangladesh, offers a mesmerizing blend of natural beauty and cultural diversity. With its lush hills, cascading waterfalls, and vibrant indigenous communities, it's a haven for nature lovers and cultural enthusiasts alike. From trekking through picturesque landscapes to experiencing the unique traditions of indigenous tribes, a visit to Bandarban promises an unforgettable journey through Bangladesh's rich heritage and breathtaking scenery. Bandarban's iconic landmarks like Nilgiri Hills and the tranquil Sangu River provide picturesque backdrops for exploration and relaxation. Whether you seek adventure or cultural immersion, Bandarban beckons with its timeless charm and boundless wonders."
    },
    {
      img: img4,
      name: "Kuakata",
      description: "Kuakata, located in southern Bangladesh, is known for its panoramic sea beach from where both sunrise and sunset can be viewed. Known as the 'Daughter of the Sea', it offers pristine beaches, lush greenery, and a calm environment. Visitors can experience the unique tradition of the indigenous Rakhine people and explore the nearby mangrove forest. Kuakata promises a tranquil and culturally rich experience for all."
    },
    {
      img: sajek,
      name: "Sajek",
      description: "Sajek Valley, situated in the Chittagong Hill Tracts, is often referred to as the 'Queen of Hills & Roof of Rangamati'. It is famous for its picturesque landscapes, beautiful sunrises and sunsets, and the view of the cloud-covered hills. Visitors can experience the unique lifestyle and culture of the indigenous people while enjoying trekking and adventure activities. Sajek offers an enchanting escape into nature's beauty and serenity."
    },
    {
      img: sylhet,
      name: "Sylhet",
      description: "Sylhet, in northeastern Bangladesh, mesmerizes visitors with its rolling tea gardens, serene lakes, and mystical hills. Known as the 'Land of Two Leaves and a Bud', Sylhet's tea plantations offer a serene escape, while its vibrant culture and historical sites, like the Shrine of Hazrat Shah Jalal and Hazrat Shah Paran, provide insights into its rich heritage. Whether exploring the lush greenery of Ratargul Swamp Forest or savoring the tranquility of Lalakhal, Sylhet promises an enchanting journey through nature and culture, leaving visitors captivated by its beauty and mystique."
    }
  ];

  return (
    <>
      <header className="header">
        <div className="animated-text-container" style={{ textAlign: "center" }}>
          <h1 className="animated-text">Look for Your Destinations</h1>
        </div>
      </header>
      <div className="wrmain">
        {places.map((place, index) => (
          <div className="wrapper" key={index}>
            <div className="img-container">
              <img src={place.img} alt={place.name} />
              <div
                className="love-button"
                onClick={() => toggleLove(index)}
                style={{ color: loved[index] ? '#711DB0' : 'black' }}
              >
                <i className="fa fa-heart"></i>
              </div>
              <div className="place-name">{place.name}</div>
              <div className="textbox">
                <h2>
                  <span style={{ color: "white" }}>{place.name}</span>{" "}
                  <MdOutlineKeyboardDoubleArrowDown style={{color:"white"}} />
                </h2>
                <p style={{ fontSize: "1.15rem", textAlign: "justify", fontWeight: "400" }}>
                  {place.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeAdd;
