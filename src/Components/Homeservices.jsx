import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import "./Components.css";
import cox from "./images/cox.png"; 
import sajeck from "./images/sajeck.jpg";
import ban from "./images/ban.jpg";
import Saintmartin from './images/places/Saintmartin.jpg'
import sajek from './images/places/sajek.jpg'
import sylhet from './images/places/sylhet.jpg'
import Bandarban from './images/places/Bandarban.jpg'
import SreeMangal from './images/places/SreeMangal.jpg'

function Homeservices() {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/cardData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setCardData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleViewDetails = () => {   
    navigate("/popularpackages");
  };

  return (
    <>
      <div className="container-fluid hservies">
        <h1>Popular Packages</h1>
        <div className="row">
          {cardData.map((data, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Card style={{ width: "93%" ,marginBottom:"50px"}} className="card">
                <Card.Img
                  variant="top"
                  src={getImagePath(data.image)} 
                  style={{ width: "100%", height: "300px" }}
                  className="img"
                />
                <Card.Body>
                  <Card.Title className="cardtitle">{data.title}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                  <Button variant="primary" onClick={handleViewDetails}>Check Details</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function getImagePath(image) {
  switch (image) {
    case 'cox.png':
      return cox;
    case 'sajek.jpg':
      return sajek;
    case 'Bandarban.jpg':
      return Bandarban;
    case 'SreeMangal.jpg':
      return SreeMangal;
    default:
      return ''; 
  }
}

export default Homeservices;
