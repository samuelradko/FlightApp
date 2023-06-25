import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeScreen() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('api/flights');
        setFlights(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching flights:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Featured Flights</h1>
      {isLoading ? (
        <p>Loading flights...</p>
      ) : (
        <div className="card">
          <div className="card-body">
            {flights.length > 0 ? (
              flights.map((flight) => (
                <Link key={flight.slug} to={`/flight/${flight.slug}`} className="flight card mb-4">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="image-container">
                        <img src={flight.image} className="flight-image" alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="flight-info card-body">
                        <h5 className="flight-name card-title">{flight.name}</h5>
                        <p className="flight-price card-text">
                          <strong>{flight.price}$</strong>
                        </p>
                        <Link to={`/flight/${flight.slug}`} className="btn btn-primary">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No flights available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
