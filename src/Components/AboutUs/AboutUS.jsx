import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import svg from "../images/svg.png";
import evento from "../images/evento.png";
import ayan from "../images/ayan.jpg";
import masud from "../images/masud.png";
import hotel from "../images/hotel.png";
import travel from "../images/travel.png";
import ms from "../images/about/ms.jpeg";
import ceo from "../images/about/ceo.png";
import sketch from "../images/sketch.png";
import planing from "../images/planing.png";
import flags from "../images/flags.png";
import stars from "../images/stars.png";
import weddingarch from "../images/weddingarch.png";
import christmaslights from "../images/christmaslights.png";
import foodsafety from "../images/foodsafety.png";
import cutlery from "../images/cutlery.png";
import "../Components.css";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const [headerText, setHeaderText] = useState("");
  const headerContent = "Lets have a reliable journey with trabel tirbe ";
  useEffect(() => {
    const animateText = () => {
      let index = 0;
      let direction = 1;
      let timeout = null;

      const type = () => {
        setHeaderText(headerContent.substring(0, index));
        index += direction;

        if (index === headerContent.length || index === 0) {
          clearInterval(timer);
          timeout = setTimeout(() => {
            direction *= -1;
            timer = setInterval(type, 90);
          }, 1000);
        }
      };

      let timer = setInterval(type, 90);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    };

    animateText();
  }, []);

  const handleclick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <div className="about-us text-center">
      <section className="overview">
        <Container>
          <h1>About Travel Tribe</h1>
          <h3>
            <span className="typewriter-text">{headerText}</span>
          </h3>
          <p>
            Travel Tribe is a premier travel agency committed to providing
            exceptional travel experiences. We specialize in curated tours,
            luxury accommodations, and personalized services to make every
            journey unforgettable.
          </p>
        </Container>
      </section>

      <section className="services">
        <Container>
          <h2>Our Services</h2>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="service-card c1">
                <Card.Body>
                  <Card.Title className="title"> Curated Tours</Card.Title>

                  <img src={travel} alt="" />
                  <i className="fa-solid fa-arrows-turn-to-dots"></i>
                  <Card.Text>
                    Explore our meticulously planned tours to the world's most
                    captivating destinations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card c2">
                <Card.Body>
                  <Card.Title className="title">
                    Luxury Accommodations
                  </Card.Title>
                  <img src={hotel} alt="" />{" "}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <Card.Text>
                    Indulge in luxury stays at our handpicked accommodations,
                    ensuring all comforts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card c3">
                <Card.Body>
                  <Card.Title className="title">
                    Personalized Services
                  </Card.Title>
                  <img src={sketch} alt="" />{" "}
                  <i className="fa-regular fa-pen-to-square"></i>
                  <Card.Text>
                    Experience tailored services designed to meet your unique
                    travel preferences and needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team">
        <Container>
          <h2>Meet Our Team</h2>
          <Row className="justify-content-center">
            <Col md={4}>
              <div className="team-member">
                <img
                  className="rounded-circle bordered-image i1"
                  style={{ width: "120px", height: "120px" }}
                  src={ceo}
                  alt="CEO image"
                />
                <h4>Masudul Alam</h4>
                <p>CEO & Founder</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-member">
                <img
                  src={ayan}
                  alt="Ayan Nandy"
                  className="rounded-circle  bordered-image i2"
                  style={{ width: "120px", height: "120px" }}
                />
                <h4>Ayan Nandy</h4>
                <p>Partner</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-member">
                <img
                  src={ms}
                  alt="Masudul Alam"
                  className="rounded-circle  bordered-image i3"
                  style={{ width: "120px", height: "120px" }}
                />
                <h4>Mushfiq</h4>
                <p>Partner</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials">
        <Container>
          <h2>What Our Customers Say</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="testimonial">
                <p>
                  "Travel Tribe made our vacation truly unforgettable. Their
                  attention to detail and personalized service exceeded our
                  expectations."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="collaborations">
        <Container>
          <h2>Our Collaborations</h2>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <div className="collaboration">
                <img src={evento} alt="Evento Logo" />
                <span>Evento</span> <span className="x">X</span>{" "}
                <span className="tr">Tribe</span>
                <p>Exclusive partnership with luxury hotel chains</p>
              </div>
            </Col>
          </Row>
          <h2>Evento</h2>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="service-card c4">
                <Card.Body>
                  <Card.Title className="title">Event Planning</Card.Title>
                  <img src={planing} alt="" />
                  <Card.Text>
                    Let Evento handle all your event planning needs, ensuring a
                    seamless and unforgettable experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card c5">
                <Card.Body>
                  <Card.Title className="title">Design Services</Card.Title>
                  <img src={flags} alt="" /> <img src={stars} alt="" />{" "}
                  <img src={christmaslights} alt="" />
                  <Card.Text>
                    From invitations to decor, Evento offers top-notch design
                    services to make your event stunning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card c6">
                <Card.Body>
                  <Card.Title className="title">Catering</Card.Title>
                  <img src={cutlery} alt="" /> <img src={foodsafety} alt="" />
                  <Card.Text>
                    Experience exquisite cuisine with Evento's catering
                    services, ensuring the finest flavors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta">
        <Container>
          <h2>Start Your Journey with Travel Tribe</h2>
          <Button onClick={handleclick} variant="primary btn1">
            Explore Tours
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;
