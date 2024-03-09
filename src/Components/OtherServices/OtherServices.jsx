import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; // Import Modal from react-bootstrap
import primio from "../images/Others service/primio.jpg";
import mid from "../images/Others service/mid.webp";
import coaster from "../images/Others service/coaster.jpg";
import hundau from "../images/Others service/hundau.jpg";

function OtherServices() {
  const [vehicles, setVehicles] = useState([
    {
      type: "Small Car",
      seats: 4,
      price: 50,
      category: "Economic",
      ac: true,
      image: primio,
    },
    {
      type: "Mid Car",
      seats: 6,
      price: 80,
      category: "Business",
      ac: true,
      image: mid,
    },
    {
      type: "Large Vehicle",
      seats: 20,
      price: 200,
      category: "Economic",
      ac: true,
      image: coaster,
    },
    {
      type: "Bus",
      seats: 35,
      price: 300,
      category: "Business",
      ac: true,
      image: hundau,
    },
  ]);

  const [sortByPrice, setSortByPrice] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showEmptyCouponModal, setShowEmptyCouponModal] = useState(false); // State variable for modal
  const navigate = useNavigate();

  const filterVehicles = () => {
    let filteredVehicles = [...vehicles];
    if (sortByPrice) {
      filteredVehicles.sort((a, b) => {
        return sortByPrice === "lowToHigh"
          ? a.price - b.price
          : b.price - a.price;
      });
    }
    return filteredVehicles;
  };

  const applyCoupon = () => {
    if (coupon.trim() === "") {
      setShowEmptyCouponModal(true);
      setShowSuccessModal(false);
      setShowErrorModal(false);
      return;
    }
    if (coupon === "DIU222") {
      setDiscount(5);
      setShowSuccessModal(true);
      setShowErrorModal(false);
      setShowEmptyCouponModal(false);
    } else {
      setDiscount(0);
      setShowSuccessModal(false);
      setShowErrorModal(true);
      setShowEmptyCouponModal(false);
    }
  };

  const navigateToPayment = (price) => {
    navigate(`/payment?price=${price}`);
  };

  const generateCards = () => {
    return filterVehicles().map((vehicle, index) => {
      const discountedPrice = vehicle.price - (vehicle.price * discount) / 100;
      const mergedPrice = discountedPrice > 0 ? discountedPrice : vehicle.price;
      return (
        <div
          key={index}
          className="col-md-3 col-sm-6 mb-4 oth2"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className="card"
            style={{
              width: "90%",
              opacity: 0,
              animation: "fadeIn 0.5s forwards",
              marginBottom:"50px"
            }}
          >
            <img
              src={vehicle.image}
              className="card-img-top"
              style={{ height: "200px" }}
              alt={vehicle.type}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.type}</h5>
              <p className="card-text">Seats: {vehicle.seats}</p>
              <p className="card-text">Category: {vehicle.category}</p>
              <p className="card-text">Per Day Price: {mergedPrice} BDT</p>
              <p className="card-text">Discount: {discount}%</p>
              <button
                className="btn btn-primary"
                onClick={() => navigateToPayment(mergedPrice)}
              >
                Get Now
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container-fluid mt-4 othmain">
      <div className="mb-4">
        <h2>Vehicle for Travel</h2>
        <p>
          Explore our range of vehicles for your travel needs. We offer small
          cars, mid-sized cars, large vehicles, and buses, catering to various
          seating capacities and preferences.
        </p>
      </div>
      {/* Filter by price */}
      <div className="row mb-4">
        <div className="col-md-4 col-sm-6" style={{ maxWidth: "300px" }}>
          <label htmlFor="sortByPrice">Sort by Price:</label>
          <select
            id="sortByPrice"
            className="form-select"
            onChange={(e) => setSortByPrice(e.target.value)}
          >
            <option value="">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      {/* Coupon input and button */}
      <div className="row mb-4">
        <div
          className="col-md-4 col-sm-6 mt-md-0 mt-2"
          style={{ maxWidth: "300px" }}
        >
          <input
            type="text"
            className="form-control"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter Coupon Code"
          />
        </div>
        <div className="col-md-4 col-sm-6 mt-md-0 mt-2">
          <button className="btn btn-primary btn1" onClick={applyCoupon}>
            Apply Coupon
          </button>
        </div>
      </div>
      {/* Vehicle Cards */}
      <div className="row">{generateCards()}</div>

      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Coupon applied successfully. You got a 5% discount!
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            style={{ backgroundColor: "#6967c3" }}
            onClick={() => setShowSuccessModal(false)}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid coupon code. Please try again.</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            style={{ backgroundColor: "#6967c3" }}
            onClick={() => setShowErrorModal(false)}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showEmptyCouponModal}
        onHide={() => setShowEmptyCouponModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter a coupon code.</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            style={{ backgroundColor: "#6967c3" }}
            onClick={() => setShowEmptyCouponModal(false)}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OtherServices;
