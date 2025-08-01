import React from 'react';
import './App.css';

function App() {
  const heading = "Available Office Spaces";

  const officeImage = "/images/office.jpg"; 

  const office1 = {
    name: "Elite Tower",
    rent: 55000,
    address: "Bandra, Mumbai",
  };

  const officeList = [
    { name: "Galaxy Business Park", rent: 45000, address: "Pune" },
    { name: "Techno Hub", rent: 70000, address: "Bangalore" },
    { name: "Skyline Plaza", rent: 60000, address: "Delhi" },
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold',
    };
  };

  return (
    <div className="App">
      <h1>{heading}</h1>

      <img src={officeImage} alt="Office Space" width="300" />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office1.name}</p>
      <p><strong>Address:</strong> {office1.address}</p>
      <p style={getRentStyle(office1.rent)}><strong>Rent:</strong> ₹{office1.rent}</p>

      <h2>Other Available Offices</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Address:</strong> {office.address}</p>
            <p style={getRentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
