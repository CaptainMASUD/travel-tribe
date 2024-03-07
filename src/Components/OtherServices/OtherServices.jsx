import React, { useState } from 'react';
import coxImage from "../images/cox.png"; 
import sajeckImage from "../images/sajeck.jpg";
import banImage from "../images/ban.jpg";
import evento from '../images/evento.png';
import '../Components.css'
import { useNavigate } from 'react-router-dom';

function OtherServices() {
  const [vehicles, setVehicles] = useState([
    {
      type: 'Small Car',
      seats: 4,
      price: 50,
      category: 'Economic',
      ac: true,
      image: coxImage
    },
    {
      type: 'Mid Car',
      seats: 6,
      price: 80,
      category: 'Business',
      ac: true,
      image: sajeckImage
    },
    {
      type: 'Large Vehicle',
      seats: 20,
      price: 200,
      category: 'Economic',
      ac: true,
      image: banImage
    },
    {
      type: 'Bus',
      seats: 35,
      price: 300,
      category: 'Business',
      ac: true,
      image: banImage
    }
  ]);

  const [sortByPrice, setSortByPrice] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  const filterVehicles = () => {
    let filteredVehicles = [...vehicles];
    if (sortByPrice) {
      filteredVehicles.sort((a, b) => {
        return sortByPrice === 'lowToHigh' ? a.price - b.price : b.price - a.price;
      });
    }
    return filteredVehicles;
  };

  const applyCoupon = () => {
    if (coupon === 'DIU222') {
      setDiscount(5);
      setShowSuccessModal(true);
      setShowErrorModal(false); 
    } else {
      setDiscount(0);
      setShowSuccessModal(false); 
      setShowErrorModal(true);
    }
  };

  const navigateToPayment = (price) => {
    navigate(`/payment?price=${price}`);
  };

  const generateCards = () => {
    return filterVehicles().map((vehicle, index) => {
      const discountedPrice = vehicle.price - (vehicle.price * discount / 100);
      const mergedPrice = discountedPrice > 0 ? discountedPrice : vehicle.price;
      return (
        <div key={index} className="col-md-3 col-sm-6 mb-4 oth2" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="card" style={{ width: "90%", opacity: 0, animation: "fadeIn 0.5s forwards" }}>
            <img src={vehicle.image} className="card-img-top" alt={vehicle.type} />
            <div className="card-body">
              <h5 className="card-title">{vehicle.type}</h5>
              <p className="card-text">Seats: {vehicle.seats}</p>
              <p className="card-text">Category: {vehicle.category}</p>
              <p className="card-text">Per Day Price: {mergedPrice} BDT</p>
              <p className="card-text">Discount: {discount}%</p>
              <button className="btn btn-primary" onClick={() => navigateToPayment(mergedPrice)}>Get Now</button>
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
        <p>Explore our range of vehicles for your travel needs. We offer small cars, mid-sized cars, large vehicles, and buses, catering to various seating capacities and preferences.</p>
      </div>

      {/* Filter by price */}
      <div className="row mb-4">
        <div className="col-md-4 col-sm-6" style={{ maxWidth: '300px' }}>
          <label htmlFor="sortByPrice">Sort by Price:</label>
          <select id="sortByPrice" className="form-select" onChange={(e) => setSortByPrice(e.target.value)}>
            <option value="">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* Coupon input and button */}
      <div className="row mb-4">
        <div className="col-md-4 col-sm-6 mt-md-0 mt-2" style={{ maxWidth: '300px' }}>
          <input type="text" className="form-control" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon Code" />
        </div>
        <div className="col-md-4 col-sm-6 mt-md-0 mt-2">
          <button className="btn btn-primary btn1" onClick={applyCoupon}>Apply Coupon</button>
        </div>
      </div>

      {/* Vehicle Cards */}
      <div className="row">
        {generateCards()}
      </div>

      {/* Success modal */}
      {showSuccessModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowSuccessModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Coupon applied successfully. You got a 5% discount!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error modal */}
      {showErrorModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Error!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowErrorModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Invalid coupon code. Please try again.
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default OtherServices;
