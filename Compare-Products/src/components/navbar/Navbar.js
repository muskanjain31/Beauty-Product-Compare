// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Profile from '../../assets/images/Profile (2).png';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      try {
        const [amazonResponse, flipkartResponse] = await Promise.all([
          fetch('http://localhost:5000/api/products/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyword: searchTerm }),
          }),
          fetch('http://localhost:5000/api/flipkart/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyword: searchTerm }),
          }),
        ]);

        if (!amazonResponse.ok || !flipkartResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const amazonData = await amazonResponse.json();
        const flipkartData = await flipkartResponse.json();

        // Process Amazon data
        const amazonProducts = Array.isArray(amazonData) ? amazonData : [];

        // Process Flipkart data
        const flipkartProducts = Array.isArray(flipkartData) ? flipkartData : [];

        // Combine the results
        const combinedResults = [
          ...amazonProducts.map(product => ({ ...product, source: 'amazon' })),
          ...flipkartProducts.map(product => ({ ...product, source: 'flipkart' }))
        ];

        navigate('/search', { state: { results: combinedResults, searchTerm: searchTerm } });
      } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message to the user)
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><span className="text-warning">Compare</span> products</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/skincare" className="dropdown-item">Skin Care</Link></li>
                  <li><Link to="/haircare" className="dropdown-item">Hair Care</Link></li>
                  <li><Link to="/bodycare" className="dropdown-item">Body Care</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">Compare</button>
            </form>
            <div className="cart-icon">
              <Link to="/signup">
                <img src={Profile} alt="Profile" /> {/* Wrapped img with Link */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
