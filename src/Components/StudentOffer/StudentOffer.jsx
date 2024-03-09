import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import cox from "../images/cox.png"; 
import ban from "../images/ban.jpg";
import '../Components.css'
import Saintmartin from '../images/places/Saintmartin.jpg'
import sajek from '../images/places/sajek.jpg'
import sylhet from '../images/places/sylhet.jpg'
import Bandarban from '../images/places/Bandarban.jpg'

function StudentOffer() {
  // Define offer data
  const initialOffers = [
    {
      hotelName: "Hotel Cox",
      placeName: "Cox's Bazar",
      roomQuantity: 1,
      bedType: "Single",
      bedQuantity: 2,
      mealQuantity: 3,
      day: 2,
      night: 3,
      price: 500,
      discount: 50, 
      image: cox
    },
    {
      hotelName: "Hotel Sajeck",
      placeName: "Sajek Valley",
      roomQuantity: 2,
      bedType: "Double",
      bedQuantity: 4,
      mealQuantity: 2,
      day: 3,
      night: 4,
      price: 700,
      discount: 220, 
      image: sajek
    },
    {
      hotelName: "Hotel Bandarban",
      placeName: "Bandarban",
      roomQuantity: 3,
      bedType: "Single",
      bedQuantity: 1,
      mealQuantity: 2,
      day: 1,
      night: 2,
      price: 600,
      discount: 100,
      image: Bandarban
    },
    {
      hotelName: "Hotel Sylhet",
      placeName: "Sylhet",
      roomQuantity: 3,
      bedType: "Single",
      bedQuantity: 1,
      mealQuantity: 2,
      day: 1,
      night: 2,
      price: 600,
      discount: 100,
      image: sylhet
    },
    {
      hotelName: "Hotel Saintmartin",
      placeName: "Saintmartin",
      roomQuantity: 3,
      bedType: "Single",
      bedQuantity: 1,
      mealQuantity: 2,
      day: 1,
      night: 2,
      price: 600,
      discount: 100,
      image: Saintmartin
    },
  ];

  // Coupon codes
  const validCouponCodes = [
    "JHDF(*&(FD*)",
    "OIEEOIRUOEIR)",
    "*R*&E^RF",
    "(&*()(*)FDFG)54(,*(*&D*F*DF",
    "DIU222",
    "222-15-6149" // New coupon code
  ];

  // State variables
  const [offers, setOffers] = useState(initialOffers);
  const [filterOption, setFilterOption] = useState("all");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [invalidCouponAlert, setInvalidCouponAlert] = useState(false);
  const [emptyCouponAlert, setEmptyCouponAlert] = useState(false);
  const [showCorrectCouponModal, setShowCorrectCouponModal] = useState(false); // State variable for modal
  const [showInvalidCouponModal, setShowInvalidCouponModal] = useState(false); // State variable for modal
  const [showEmptyCouponModal, setShowEmptyCouponModal] = useState(false); // State variable for modal
  const navigate = useNavigate();

  // Function to handle filtering
  const handleFilterChange = (event) => {
    const option = event.target.value;
    setFilterOption(option);
    switch (option) {
      case "lowToHigh":
        setOffers([...initialOffers].sort((a, b) => a.price - b.price));
        break;
      case "highToLow":
        setOffers([...initialOffers].sort((a, b) => b.price - a.price));
        break;
      default:
        setOffers(initialOffers);
    }
  };

  // Calculate discounted price
  const calculateDiscountedPrice = (price, discount, extraDiscount = 0) => {
    return (price - discount) * (1 - extraDiscount / 100);
  };

  // Function to handle applying coupon code
  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      setAppliedCoupon(false);
      setShowEmptyCouponModal(true);
      return;
    }

    if (validCouponCodes.includes(couponCode)) {
      setAppliedCoupon(true);
      setShowCorrectCouponModal(true);
    } else {
      setAppliedCoupon(false);
      setShowInvalidCouponModal(true);
    }
  };

  // Function to close modals
  const closeModal = (modalType) => {
    switch (modalType) {
      case 'correct':
        setShowCorrectCouponModal(false);
        break;
      case 'invalid':
        setShowInvalidCouponModal(false);
        break;
      case 'empty':
        setShowEmptyCouponModal(false);
        break;
      default:
        break;
    }
  };

  // Function to handle claim offer
  const claimOffer = (offer) => {
    const discountedPrice = calculateDiscountedPrice(offer.price, offer.discount);
    navigate(`/payment?rent=${discountedPrice}`);
  };

  // Card generator function
  const generateCards = () => {
    return offers.map((offer, index) => (
      <div key={index} className="col-md-3 col-sm-6 mb-5 scardmain"> 
        <div className="card" style={{ width: "90%" }}> 
          <img src={offer.image} style={{height:"200px"}} className="card-img-top" alt={offer.placeName} />
          <div className="card-body">
            <h5 className="card-title">{offer.hotelName}</h5>
            <p className="card-text">{offer.placeName}</p>
            <p className="card-text"><span>Room:</span> <span style={{ color: "#6967c3" }}>{offer.roomQuantity}</span> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> <span>Bed:</span> {offer.bedType} <span style={{ color: "#6967c3" }}>{offer.bedQuantity}</span></p>
            <p className="card-text"><span>Day:</span> <span style={{ color: "#6967c3" }}>{offer.day}</span> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span>Night:</span> <span style={{ color: "#6967c3" }}>{offer.night}</span></p>
            {/* Check if discount is available */}
            {offer.discount > 0 ? (
              <div>
                <p className="card-text mb-1">Regualr Price: <del style={{ color: "red" }}>{offer.price} BDT</del></p>
                {appliedCoupon ? (
                  <p className="card-text mb-0">Discounted Price: <span style={{ color: "#6967c3" }}>{calculateDiscountedPrice(offer.price, offer.discount, 5).toFixed(2)} BDT</span></p>
                ) : (
                  <p className="card-text mb-3">Discounted Price: <span style={{ color: "#561C24" }}>{calculateDiscountedPrice(offer.price, offer.discount).toFixed(2)} BDT</span></p>
                )}
              </div>
            ) : (
              <p className="card-text mb-0">Price: {offer.price} BDT</p>
            )}
            <button className="btn btn-primary" onClick={() => claimOffer(offer)}>Claim Offer</button>
          </div>
        </div>
      </div>
    ));
  };

  // Function to handle navigation to custom packages
  const navigateToCustomPackages = () => {
    navigate('/custompackages');
  };

  return (
    <div className="container-fluid mt-4 stofferin">
      <h2 className="mb-4">Student Offers</h2>
      {/* Filter section */}
      <div className="row mb-2">
        <div className="col-md-6">
          <select
            value={filterOption}
            onChange={handleFilterChange}
            className="form-control ss1"
          >
            <option value="all">All</option>
            <option value="lowToHigh">Price Low to High</option>
            <option value="highToLow">Price High to Low</option>
          </select>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
              />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn1" onClick={applyCoupon}>Apply Coupon</button>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Packages button */}
      <div className="row mb-2">
        <div className="col-md-12">
          <button style={{ backgroundColor: "#5F5D9C" }} className="btn btn-secondary" type="button" onClick={navigateToCustomPackages}>Custom Packages</button>
        </div>
      </div>
      {/* Modals */}
      {/* Correct coupon modal */}
      <Modal
        show={showCorrectCouponModal}
        onHide={() => closeModal('correct')}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Correct Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'green' }}>
          Your coupon is correct.
        </Modal.Body>
        <Modal.Footer>
          <button style={{ backgroundColor: '#6967c3' }} className="btn btn-secondary" onClick={() => closeModal('correct')}>Close</button>
        </Modal.Footer>
      </Modal>
      {/* Invalid coupon modal */}
      <Modal
        show={showInvalidCouponModal}
        onHide={() => closeModal('invalid')}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'red' }}>
          The coupon code is not correct.
        </Modal.Body>
        <Modal.Footer>
          <button style={{ backgroundColor: '#6967c3' }} className="btn btn-secondary" onClick={() => closeModal('invalid')}>Close</button>
        </Modal.Footer>
      </Modal>
      {/* Empty coupon modal */}
      <Modal
        show={showEmptyCouponModal}
        onHide={() => closeModal('empty')}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Empty Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please enter a coupon code.
        </Modal.Body>
        <Modal.Footer>
          <button style={{ backgroundColor: '#6967c3' }} className="btn btn-secondary" onClick={() => closeModal('empty')}>Close</button>
        </Modal.Footer>
      </Modal>
      {/* Cards */}
      <div className="row">
        {generateCards()}
      </div>
    </div>
  );
}

export default StudentOffer;
