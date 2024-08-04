import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Navbar from '../navbar/Navbar.js';
import Contacts from '../../Contacts.js';
import Card from '../card/Card.js';
import CarouselPage from '../carousel/Carousel.js';
import ProductCard from '../ProductCard/ProductCard.js';
import products from '../../Products.js';
import Footer from '../footer/footer.js';
import Category from '../SkinCare/Skincare1.js';
import HairCare from '../haircare/HairCare.js';
import BodyCare from '../bodycare/BodyCare.js';
import CartPage from "../CartPage/ContextCart.js";
import SearchPage from '../searchPage.js'; // Import the SearchPage component
import './Homepage.css';

function Homepage() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomepageContent />} />
          <Route path="/skincare" element={<Category />} />
          <Route path="/haircare" element={<HairCare />} />
          <Route path="/bodycare" element={<BodyCare />} />
          <Route path="/compare" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  );
}

// Your existing homepage content
function HomepageContent() {
  const { addItem } = useCart(); // Destructure addItem from useCart
  const [compareList, setCompareList] = useState([]);
  return (
    <>
      <Navbar />
      <CarouselPage />
      <div className="app-container">
        <div className="card-container">
          {Contacts.map(card => (
            <Card
              key={card.id}
              img={card.imgURL}
              name={card.name}
              category={card.category}
            />
          ))}
        </div>
        <div className='back-colour'>
          <h3 className='P-Products'>Popular Products</h3>
          <div className="container">
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col-lg-3 col-md-4">
                  <ProductCard
                    product={product}
                    compareList={compareList}
                    setCompareList={setCompareList}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
