import React from 'react';
import { useState, useEffect } from 'react';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // make API call to fetch listings data
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/listings');
      const data = await response.json();
      setListings(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.name}</h3>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
            <button>Contact Seller</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
