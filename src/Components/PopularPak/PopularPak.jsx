import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PopularPak() {
  const { imageName } = useParams();

  const navigate = useNavigate();
  const handleBookNow = () => {
    // Navigate to payment component
    navigate('/payment');
  };

  // Function to generate a random price in BDT
  const generateRandomPrice = () => {
    const priceInBDT = Math.floor(Math.random() * 1000) + 500; // Random price between 500 and 1500 in BDT
    return ` ${priceInBDT} BDT`;
  };

  // Array of all available hotel names and addresses
  const allHotelData = [
    { name: 'Cox Hotel 1', address: 'Cox Address 1' },
    { name: 'Cox Hotel 2', address: 'Cox Address 2' },
    { name: 'Cox Hotel 3', address: 'Cox Address 3' },
    { name: 'Sajek Hotel 1', address: 'Sajek Address 1' },
    { name: 'Sajek Hotel 2', address: 'Sajek Address 2' },
    { name: 'Sajek Hotel 3', address: 'Sajek Address 3' },
    { name: 'Bandarban Hotel 1', address: 'Bandarban Address 1' },
    { name: 'Bandarban Hotel 2', address: 'Bandarban Address 2' },
    { name: 'Bandarban Hotel 3', address: 'Bandarban Address 3' }
  ];

  // Select a random hotel data from all available hotel data
  const randomHotelData = allHotelData[Math.floor(Math.random() * allHotelData.length)] || { name: 'Unknown Hotel', address: 'Unknown Address' };

  return (
    <div className="container mt-4 cpmain">
      <h2 className="text-center mb-4">Popular Packages</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="table-responsive">
            <table className="table custom-table" style={{borderRadius:"5px"}}>
              <tbody >
                <tr>
                  <td>Hotel Name:</td>
                  <td>
                    <input type="text" className="form-control" value={randomHotelData.name} readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Hotel Address:</td>
                  <td>
                    <input type="text" className="form-control" value={randomHotelData.address} readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Rooms:</td>
                  <td>
                    <input type="text" className="form-control" value="10" readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Food:</td>
                  <td>
                    <input type="text" className="form-control" value="Breakfast included" readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Swimming Pool:</td>
                  <td>
                    <input type="text" className="form-control" value="Yes" readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Guide:</td>
                  <td>
                    <input type="text" className="form-control" value="Available" readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Transport:</td>
                  <td>
                    <input type="text" className="form-control" value="Airport shuttle" readOnly />
                  </td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>
                    <input type="text" className="form-control" value={generateRandomPrice()} readOnly />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleBookNow} style={{backgroundColor:"#662549",border:'none', borderRadius:'3px'}}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PopularPak;
