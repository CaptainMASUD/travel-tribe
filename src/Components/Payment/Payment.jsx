import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import creditcard from "../images/payment/creditcard.png";
import shield from "../images/payment/shield.png";
import bk from "../images/payment/bk.webp";
import nd from "../images/payment/nd.webp";
import creditcard1 from "../images/payment/creditcard1.png";
import visa from "../images/payment/visa.png";
import rc from "../images/payment/rc.png";
import "../Components.css";

function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rent = searchParams.get("rent");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  // Function to handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Function to handle bank selection
  const handleBankSelection = (e) => {
    setSelectedBank(e.target.value);
  };

  // Function to handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }
  };

  // Function to handle phone number input change
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (value.length <= 11) {
        setPhoneNumber(value);
        setPhoneNumberError("");
      } else {
        setPhoneNumberError("Phone number should not exceed 11 digits");
      }
    } else {
      setPhoneNumberError("Please enter a valid phone number");
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (
      !paymentMethod ||
      !selectedBank ||
      !name ||
      !phoneNumber ||
      phoneNumberError ||
      nameError
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setShowReceipt(true);
      // Implement your payment logic here
    }
  };

  // Function to handle Proceed and Continue button click
  const handleProceedAndContinue = () => {
    // Add your logic here to proceed and continue
    console.log("Proceed and Continue");
  };

  return (
    <div className="container mt-4 pmain">
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Please fill in all required fields.
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Payment Methods</h3>
          <div className="form-group">
            <label htmlFor="paymentMethod">Select Payment Method:</label>
            <select
              className="form-control"
              id="paymentMethod"
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select</option>
              <option value="Mobile Banking">Mobile Banking</option>
              <option value="Debit/Credit Card">Debit/Credit Card</option>
            </select>
          </div>
          {paymentMethod === "Mobile Banking" && (
            <div className="form-group">
              <label htmlFor="mobileBank">Select Mobile Banking:</label>
              <select
                className="form-control"
                id="mobileBank"
                onChange={handleBankSelection}
              >
                <option value="">Select</option>
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="Rocket">Rocket</option>
              </select>
            </div>
          )}
          {paymentMethod === "Debit/Credit Card" && (
            <div className="form-group">
              <label htmlFor="bank">Select Bank:</label>
              <select
                className="form-control"
                id="bank"
                onChange={handleBankSelection}
              >
                <option value="">Select</option>
                <option value="Bank 1">Bank 1</option>
                <option value="Bank 2">Bank 2</option>
                <option value="Bank 3">Bank 3</option>
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
            {nameError && <small className="text-danger">{nameError}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <select className="form-control" id="countryCode">
                  <option value="+880">+880</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
              />
            </div>
            {phoneNumberError && (
              <small className="text-danger">{phoneNumberError}</small>
            )}
          </div>
          <button className="btn btn-primary mb-4 btn1" onClick={handleSubmit}>
            Submit
          </button>
          {showReceipt && (
            <div className="receipt">
              <h2>Payment Receipt</h2>
              <p>
                <strong>Product:</strong> Destination Booking
              </p>
              <p>
                <strong>Amount:</strong> {rent} BDT
              </p>
              <p>
                <strong>User:</strong> {name}
              </p>
              <p>
                <strong>Phone Number:</strong> {phoneNumber}
              </p>
              <p>
                <strong>Payment Method:</strong> {paymentMethod}
              </p>
              {selectedBank && (
                <p>
                  <strong>Bank:</strong> {selectedBank}
                </p>
              )}
              <p>
                <strong>Date:</strong> {new Date().toLocaleDateString()}
              </p>
              <button
                className="btn btn-success btn2"
                onClick={handleProceedAndContinue}
              >
                Proceed and Continue
              </button>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={creditcard} alt="" /> Safe and Secured
              </h5>
              <p className="card-text">
                We use advanced encryption and security measures to ensure that
                your payment information is safe and secure.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">
                <img src={shield} alt="" /> Trusted Payment Methods
              </h5>
              <p className="card-text">
                Our payment methods are trusted and widely used, providing you
                with convenience and peace of mind.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Payment Methods</h5>
              <div className="payment-methods">
                <img
                  src={creditcard1}
                  alt=""
                  className="payment-method-image"
                />
                <img src={visa} alt="" className="payment-method-image" />
                <img src={bk} alt="" className="payment-method-image" />
                <img src={nd} alt="" className="payment-method-image" />
                <img src={rc} alt="" className="payment-method-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
