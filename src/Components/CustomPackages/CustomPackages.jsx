import React, { useState } from 'react';
import '../Components.css';
import { useNavigate } from 'react-router-dom';

function CustomPackages() {
  const [selectedOptions, setSelectedOptions] = useState({
    place: '',
    day: 1,
    night: 1,
    food: 'Standard',
    room: 'Standard',
    bed: 'Single',
    hotelType: 'Standard',
    hotelName: '',
    guide: 'No',
    transport: 'No',
    transportType: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    let updatedOptions = { ...selectedOptions, [name]: value };

    // Update hotel names based on hotel type and place
    if (name === 'hotelType') {
      if (value === 'Standard' && selectedOptions.place === "Cox's Bazar") {
        // Set average hotel names for Cox's Bazar
        const coxBazarHotels = ['Cox Hotel 1', 'Cox Hotel 2', 'Cox Hotel 3', 'Cox Hotel 4', 'Cox Hotel 5'];
        updatedOptions = { ...updatedOptions, hotelName: coxBazarHotels[0] };
      } else if (value === 'Deluxe' && selectedOptions.place === "Cox's Bazar") {
        // Set 5-star hotel names for Cox's Bazar
        const coxBazar5StarHotels = ['5 Star Hotel A', '5 Star Hotel B', '5 Star Hotel C', '5 Star Hotel D', '5 Star Hotel E'];
        updatedOptions = { ...updatedOptions, hotelName: coxBazar5StarHotels[0] };
      } else if (value === 'Standard') {
        // Set 5 random hotel names for standard type
        const standardHotels = ['Hotel A', 'Hotel B', 'Hotel C', 'Hotel D', 'Hotel E'];
        updatedOptions = { ...updatedOptions, hotelName: standardHotels[0] };
      } else if (value === 'Deluxe') {
        // Set 5 random hotel names for deluxe type
        const deluxeHotels = ['Hotel X', 'Hotel Y', 'Hotel Z', 'Hotel W', 'Hotel V'];
        updatedOptions = { ...updatedOptions, hotelName: deluxeHotels[0] };
      } else if (value === 'Simple') {
        // Set 5 random hotel names for simple type
        const simpleHotels = ['Hotel 1', 'Hotel 2', 'Hotel 3', 'Hotel 4', 'Hotel 5'];
        updatedOptions = { ...updatedOptions, hotelName: simpleHotels[0] };
      }
    }

    setSelectedOptions(updatedOptions);
  };

  const calculatePrice = () => {
    let price = 0;
    // Adjust price based on selected options
    if (selectedOptions.room === 'Deluxe') {
      price += 200;
    }
    // Add more conditions for other options if needed

    // Calculate total price
    setTotalPrice(price);
  };

  const handleConfirm = () => {
    calculatePrice();
    setIsConfirmed(true);
  };

  const handleDelete = () => {
    setIsConfirmed(false);
  };

  const handlePayNow = () => {
    navigate('/payment');
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mt-4 cpmain">
      <h2 className="text-center mb-4">Custom Packages</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          {/* Selection options */}
          <table className="table custom-table">
            <tbody>
              <tr>
                <td>Select Place:</td>
                <td>
                  <select className="form-control" name="place" value={selectedOptions.place} onChange={handleOptionChange}>
                    <option value="">Select a place</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                    <option value="Sajek Valley">Sajek Valley</option>
                    <option value="Sundarbans">Sundarbans</option>
                    {/* Add more places */}
                  </select>
                </td>
              </tr>
              {/* Add other selection options */}
              <tr>
                <td>Day:</td>
                <td><input type="number" className="form-control" name="day" value={selectedOptions.day} onChange={handleOptionChange} /></td>
              </tr>
              <tr>
                <td>Night:</td>
                <td><input type="number" className="form-control" name="night" value={selectedOptions.night} onChange={handleOptionChange} /></td>
              </tr>
              <tr>
                <td>Food:</td>
                <td>
                  <select className="form-control" name="food" value={selectedOptions.food} onChange={handleOptionChange}>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    {/* Add more options if needed */}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Room Type:</td>
                <td>
                  <select className="form-control" name="room" value={selectedOptions.room} onChange={handleOptionChange}>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    {/* Add more options if needed */}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Bed Type:</td>
                <td>
                  <select className="form-control" name="bed" value={selectedOptions.bed} onChange={handleOptionChange}>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    {/* Add more options if needed */}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Hotel Type:</td>
                <td>
                  <select className="form-control" name="hotelType" value={selectedOptions.hotelType} onChange={handleOptionChange}>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Simple">Simple</option>
                    {/* Add more options if needed */}
                  </select>
                </td>
              </tr>
              {/* Display hotel names based on hotel type */}
              {(selectedOptions.hotelType === 'Standard' || selectedOptions.hotelType === 'Deluxe' || selectedOptions.hotelType === 'Simple') && (
                <tr>
                  <td>Hotel Name:</td>
                  <td>
                    <select className="form-control" name="hotelName" value={selectedOptions.hotelName} onChange={handleOptionChange}>
                      <option value="">Select a hotel</option>
                      {(selectedOptions.place === "Cox's Bazar" && selectedOptions.hotelType === 'Deluxe') ? (
                        <React.Fragment>
                          <option value="5 Star Hotel A">5 Star Hotel A</option>
                          <option value="5 Star Hotel B">5 Star Hotel B</option>
                          <option value="5 Star Hotel C">5 Star Hotel C</option>
                          <option value="5 Star Hotel D">5 Star Hotel D</option>
                          <option value="5 Star Hotel E">5 Star Hotel E</option>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <option value="Hotel A">Hotel A</option>
                          <option value="Hotel B">Hotel B</option>
                          <option value="Hotel C">Hotel C</option>
                          <option value="Hotel D">Hotel D</option>
                          <option value="Hotel E">Hotel E</option>
                        </React.Fragment>
                      )}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>Guide:</td>
                <td>
                  <select className="form-control" name="guide" value={selectedOptions.guide} onChange={handleOptionChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    {/* Add more options if needed */}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Transport:</td>
                <td>
                  <select className="form-control" name="transport" value={selectedOptions.transport} onChange={handleOptionChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </td>
              </tr>
              {/* Show transport type if transport is selected */}
              {selectedOptions.transport === 'Yes' && (
                <tr>
                  <td>Transport Type:</td>
                  <td>
                    <select className="form-control" name="transportType" value={selectedOptions.transportType} onChange={handleOptionChange}>
                      <option value="">Select transport type</option>
                      <option value="Bus">Bus</option>
                      <option value="Train">Train</option>
                      <option value="Plane">Plane</option>
                      <option value="Car">Car</option>
                    </select>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-primary mr-2 mt-4 cusbtn1" onClick={handleConfirm} style={{backgroundColor:"#7743DB",borderRadius:"3px",border:"none"}}>Confirm</button>
            <button className="btn btn-danger mt-4 cusbtn2" onClick={handleDelete} style={{borderRadius:"3px"}} >Cancel Package</button>
          </div>
        </div>
      </div>
      {/* Show details and pay now button */}
      {isConfirmed && (
        <div className="row justify-content-center mt-4 cpcard">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <table className="table">
              <tbody>
                <tr>
                  <td>Place:</td>
                  <td>{selectedOptions.place}</td>
                </tr>
                <tr>
                  <td>Day:</td>
                  <td>{selectedOptions.day}</td>
                </tr>
                <tr>
                  <td>Night:</td>
                  <td>{selectedOptions.night}</td>
                </tr>
                <tr>
                  <td>Food:</td>
                  <td>{selectedOptions.food}</td>
                </tr>
                <tr>
                  <td>Room Type:</td>
                  <td>{selectedOptions.room}</td>
                </tr>
                <tr>
                  <td>Bed Type:</td>
                  <td>{selectedOptions.bed}</td>
                </tr>
                <tr>
                  <td>Hotel Type:</td>
                  <td>{selectedOptions.hotelType}</td>
                </tr>
                <tr>
                  <td>Hotel Name:</td>
                  <td>{selectedOptions.hotelName}</td>
                </tr>
                <tr>
                  <td>Guide:</td>
                  <td>{selectedOptions.guide}</td>
                </tr>
                <tr>
                  <td>Transport:</td>
                  <td>{selectedOptions.transport}</td>
                </tr>
                {selectedOptions.transport === 'Yes' && (
                  <tr>
                    <td>Transport Type:</td>
                    <td>{selectedOptions.transportType}</td>
                  </tr>
                )}
                {/* Show more selected options */}
                <tr>
                  <td>Total Price:</td>
                  <td>{totalPrice} BDT</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <button className="btn btn3 btn-success" onClick={handlePayNow} style={{backgroundColor:"#7743DB",border:"none",borderRadius:"3px"}}>Pay Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomPackages;
