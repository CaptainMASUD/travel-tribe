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
          <h2>Details <i class="fa-solid fa-angles-right"></i></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            architecto accusamus nostrum ipsa adipisci sapiente possimus odit.
            Quidem deserunt nemo, doloribus, illum architecto aliquid eius
            explicabo fugiat consequuntur reiciendis inciduntl Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odit doloribus aspernatur
            sapiente impedit velit nisi beatae placeat ea cum in ipsum
            architecto voluptatum consequatur recusandae, dolorem esse quos
            veritatis quis illo et nostrum corrupti quidem saepe. Alias minima,
            ullam labore, sequi ipsum voluptatem recusandae explicabo minus
            atque modi hic necessitatibus.
          </p>
        </div>
      </div>
      </div>
      <div className="wrbody2">
      <div className="wrapper2">
      <div className="textbox2">
          <h2>Details <i class="fa-solid fa-angles-right"></i></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            architecto accusamus nostrum ipsa adipisci sapiente possimus odit.
            Quidem deserunt nemo, doloribus, illum architecto aliquid eius
            explicabo fugiat consequuntur reiciendis inciduntl Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odit doloribus aspernatur
            sapiente impedit velit nisi beatae placeat ea cum in ipsum
            architecto voluptatum consequatur recusandae, dolorem esse quos
            veritatis quis illo et nostrum corrupti quidem saepe. Alias minima,
            ullam labore, sequi ipsum voluptatem recusandae explicabo minus
            atque modi hic necessitatibus.
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
