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
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleBankSelection = (e) => {
    setSelectedBank(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }
  };

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
    }
  };

  const handleProceedAndContinue = () => {
    setShowVerificationModal(true);
    // Add logic to send verification code to the user's email here
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerifyPayment = () => {
    // Add logic to verify the verification code
    // For demonstration purpose, assume the verification code is '123456'
    if (verificationCode === '123456') {
      setPaymentSuccess(true);
    }
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
            <div className="receipt card p-3">
              <h2 className="receipt-heading">Payment Receipt</h2>
              <div className="receipt-info">
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Product:</strong>
                  </div>
                  <div className="col-6">Destination Booking</div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Amount:</strong>
                  </div>
                  <div className="col-6">{rent} BDT</div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <strong>User:</strong>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Phone Number:</strong>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      value={phoneNumber}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Payment Method:</strong>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      value={paymentMethod}
                      readOnly
                    />
                  </div>
                </div>

                {selectedBank && (
                  <div className="row mb-2">
                    <div className="col-6">
                      <strong>Bank:</strong>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        value={selectedBank}
                        readOnly
                      />
                    </div>
                  </div>
                )}

                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Date:</strong>
                  </div>
                  <div className="col-6">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
              <button
                style={{ width: "200px", color: "white" }}
                className="btn btn-success btn-block mt-3"
                onClick={handleProceedAndContinue}
              >
                Proceed and Continue
              </button>
            </div>
          )}
          {showVerificationModal && !paymentSuccess && (
            <div className="card cdm p-3 mt-3">
              <h2><i class="fa-solid fa-shield fa-bounce"></i> Get Verified Now</h2>
              <div className="form-group">
                <p>Check your email for after Payment and put the code to the box and get verified.</p>
                <label htmlFor="verificationCode">Verification Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  placeholder="Enter verification code"
                />
              </div>
              <button
                className="btn btn-primary vbtn"
                style={{ width: "130px", color: "white" }}
                onClick={handleVerifyPayment}
              >
                Verify Payment
              </button>
            </div>
          )}
          {paymentSuccess && (
            <div className="card cdm p-3 mt-3">
              <h2>Payment Secured</h2>
              <p>Your payment has been successfully verified.</p>
            </div>
          )}
        </div>
        <div className="col-md-6 spain">
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
