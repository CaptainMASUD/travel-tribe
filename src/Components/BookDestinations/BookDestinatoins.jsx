import React from 'react';
import coxImage from "../images/cox.png"; 
import sajeckImage from "../images/sajeck.jpg";
import banImage from "../images/ban.jpg";
import { useNavigate } from 'react-router-dom';

function BookDestinations() {
    const navigate = useNavigate();

    const handlenavigate = (rent) => {
        navigate(`/payment?rent=${rent}`);
    };

    const destinations = [
        {
            placeName: "Cox's Bazar",
            details: "Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts.",
            rent: 1000,
            image: coxImage
        },
        {
            placeName: "Sajek Valley",
            details: "Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek Union, Baghaichhari Upazila in Rangamati District. The valley is 1,800 feet above sea level.",
            rent: 1500,
            image: sajeckImage
        },
        {
            placeName: "Bandarban",
            details: "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Hill Tracts. Bandarban , or in Marma or Arakanese language as 'Rwa-daw Mro' is also known as Arvumi or the Bohmong Circle (of the rest of the three hill districts Rangamati is the Chakma Circle, khagrachhari is the Mong Circle).",
            rent: 1200,
            image: banImage
        },
        {
            placeName: "Bandarban",
            details: "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Hill Tracts. Bandarban , or in Marma or Arakanese language as 'Rwa-daw Mro' is also known as Arvumi or the Bohmong Circle (of the rest of the three hill districts Rangamati is the Chakma Circle, khagrachhari is the Mong Circle).",
            rent: 1200,
            image: banImage
        },
        {
            placeName: "Bandarban",
            details: "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Hill Tracts. Bandarban , or in Marma or Arakanese language as 'Rwa-daw Mro' is also known as Arvumi or the Bohmong Circle (of the rest of the three hill districts Rangamati is the Chakma Circle, khagrachhari is the Mong Circle).",
            rent: 1200,
            image: banImage
        },
        {
            placeName: "Bandarban",
            details: "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Hill Tracts. Bandarban , or in Marma or Arakanese language as 'Rwa-daw Mro' is also known as Arvumi or the Bohmong Circle (of the rest of the three hill districts Rangamati is the Chakma Circle, khagrachhari is the Mong Circle).",
            rent: 1200,
            image: banImage
        },
        {
            placeName: "Bandarban",
            details: "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Hill Tracts. Bandarban , or in Marma or Arakanese language as 'Rwa-daw Mro' is also known as Arvumi or the Bohmong Circle (of the rest of the three hill districts Rangamati is the Chakma Circle, khagrachhari is the Mong Circle).",
            rent: 1200,
            image: banImage
        },
      
    ];

    const truncateText = (text, maxLength) => {
        const words = text.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
        return text;
    };

    const generateCards = () => {
        return destinations.map((destination, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 mt-5 mb-5 bdmain">
                <div className="card">
                    <img src={destination.image} className="card-img-top" alt={destination.placeName} />
                    <div className="card-body">
                        <h5 className="card-title">{destination.placeName}</h5>
                        <p className="card-text">{truncateText(destination.details, 39)}</p>
                        <p className="card-text">Rent per Day: <span style={{ color: '#d17d31' }}>{destination.rent} BDT</span></p>
                        <button onClick={() => handlenavigate(destination.rent)} className="btn btn-primary">Get Now</button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Book Destinations</h2>
            <div className="row justify-content-between">
                {generateCards()}
            </div>
        </div>
    );
}

export default BookDestinations;
