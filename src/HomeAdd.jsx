import React from "react";
import himg1 from "./Components/images/Homeimg/himg1.png";
import himg2 from "./Components/images/Homeimg/himg2.png";

function HomeAdd() {
  return (
    <>
      <div className="wrmain">
        <div className="wrbody">
          <div className="wrapper">
            <img src={himg1} alt="" />
            <div className="textbox">
              <h2>
                <span style={{ color: "#39255f" }}>Bandarban</span> <i class="fa-solid fa-angles-right"></i>
              </h2>
              <p style={{ fontSize: "1.15rem", textAlign: "justify",fontWeight:"400" }}>
                <span style={{ color: "#7371d7" }}>Bandarban</span>, in southeastern Bangladesh, offers a mesmerizing
                blend of natural beauty and cultural diversity. With its lush
                hills, cascading waterfalls, and vibrant indigenous communities,
                it's a haven for nature lovers and cultural enthusiasts alike.
                From trekking through picturesque landscapes to experiencing the
                unique traditions of indigenous tribes, a visit to <span style={{ color: "#7371d7" }}>Bandarban</span>
                promises an unforgettable journey through Bangladesh's rich
                heritage and breathtaking scenery.<span style={{ color: "#7371d7" }}>Bandarban</span>'s iconic landmarks
                like Nilgiri Hills and the tranquil Sangu River provide
                picturesque backdrops for exploration and relaxation. Whether
                you seek adventure or cultural immersion, <span style={{ color: "#7371d7" }}>Bandarban</span> beckons with
                its timeless charm and boundless wonders.
              </p>
            </div>
          </div>
        </div>
        <div className="wrbody2">
          <div className="wrapper2">
            <div className="textbox2">
              <h2>
                <span style={{ color: "#39255f" }}>Sylhet</span> <i class="fa-solid fa-angles-right"></i>
              </h2>
              <p style={{ fontSize: "1.15rem", textAlign: "justify",fontWeight:"400"}}>
                In northeastern Bangladesh, Sylhet mesmerizes visitors with its
                rolling tea gardens, serene lakes, and mystical hills. Known as
                the "Land of Two Leaves and a Bud," Sylhet's tea plantations
                offer a serene escape, while its vibrant culture and historical
                sites, like the Shrine of Hazrat Shah Jalal and Hazrat Shah
                Paran, provide insights into its rich heritage. Whether
                exploring the lush greenery of Ratargul Swamp Forest or savoring
                the tranquility of Lalakhal, <span style={{ color: "#7371d7" }}>Sylhet</span> promises an enchanting
                journey through nature and culture, leaving visitors captivated
                by its beauty and mystique.
              </p>
            </div>
            <img src={himg2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdd;
