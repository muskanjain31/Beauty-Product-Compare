import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../components/searchPage.css';

const USD_TO_INR_CONVERSION_RATE = 75;

function SearchPage() {
  const location = useLocation();
  const { results, searchTerm } = location.state || { results: [], searchTerm: '' };
  const [combinedResults, setCombinedResults] = useState([]);

  useEffect(() => {
    if (results && Array.isArray(results)) {
      const groupedProducts = results.reduce((acc, result) => {
        if (result && (result.product_title || result.title)) {
          const key = (result.product_title || result.title).toLowerCase();
          if (!acc[key]) {
            acc[key] = { amazon: null, flipkart: null };
          }
          acc[key][result.source] = result;
        }
        return acc;
      }, {});

      const productsArray = Object.values(groupedProducts).map(productGroup => {
        const amazonPrice = productGroup.amazon && productGroup.amazon.product_minimum_offer_price
          ? parseFloat(productGroup.amazon.product_minimum_offer_price.replace('₹', '').replace(',', ''))
          : Infinity;

        const flipkartPrice = productGroup.flipkart && productGroup.flipkart.price
          ? parseFloat(productGroup.flipkart.price)
          : Infinity;

        return {
          ...productGroup,
          lowestPrice: Math.min(amazonPrice, flipkartPrice),
          amazonPrice: amazonPrice,
          flipkartPrice: flipkartPrice
        };
      });

      const sortedProducts = productsArray.sort((a, b) => a.lowestPrice - b.lowestPrice);
      setCombinedResults(sortedProducts);
    } else {
      console.warn('Results are not an array or not defined');
    }
  }, [results]);

  return (
    <div className="search-page">
      <h2>Search Results for "{searchTerm}"</h2>
      {combinedResults.length > 0 ? (
        <div className="search-results-grid">
          {combinedResults.map((productGroup, index) => (
            <ProductCard
              key={index}
              productGroup={productGroup}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

function ProductCard({ productGroup }) {
  const { amazon, flipkart } = productGroup;
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const formatPrice = (price) => {
    if (price == null || isNaN(price)) return 'Not available';
    return `₹${parseFloat(price).toFixed(2)}`;
  };

  const getAmazonPrice = () => {
    if (amazon && amazon.product_minimum_offer_price) {
      const priceString = amazon.product_minimum_offer_price.replace('₹', '').replace(',', '');
      return formatPrice(parseFloat(priceString));
    }
    return 'Not available';
  };

  const getFlipkartPrice = () => {
    if (flipkart && flipkart.price) {
      return formatPrice(flipkart.price);
    }
    return 'Not available';
  };

  const amazonPrice = getAmazonPrice();
  const flipkartPrice = getFlipkartPrice();

  return (
    <div className="ProductCard">
      <div className="ProductInfo">
        {amazon && amazon.product_photo && (
          <img 
            src={amazon.product_photo}
            alt={amazon.product_title}
            className="ProductImage" 
          />
        )}
        {flipkart && flipkart.images && flipkart.images.length > 0 && (
          <img 
            src={flipkart.images[0]}
            alt={flipkart.title}
            className="ProductImage" 
          />
        )}
        <h3 className="ProductName">{amazon ? amazon.product_title : flipkart.title}</h3>
        <div className="DescriptionDropdown">
          <button 
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="DropdownButton"
          >
            Description {isDescriptionOpen ? '▲' : '▼'}
          </button>
          {isDescriptionOpen && (
            <p className="ProductDescription">
              {amazon?.feature_bullets?.join(' ') || flipkart?.highlights?.join(' ')}
            </p>
          )}
        </div>
        <p className="ProductRating">
          {amazon && `Amazon: ${amazon.product_star_rating ?? 'No ratings'}`}
          {flipkart && ` | Flipkart: ${flipkart.rating?.count ?? 'No ratings'}, ${flipkart.rating?.average ?? 'No average'}`}
        </p>
        {amazon && <p className="ProductPrice">Amazon: {amazonPrice}</p>}
        {flipkart && <p className="ProductPrice">Flipkart: {flipkartPrice}</p>}
      </div>
      <div className="buttonPosition">
        {amazon && amazon.product_url && (
          <a
            className="ProductButton"
            href={amazon.product_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Amazon
          </a>
        )}
        {flipkart && flipkart.url && (
          <a
            className="ProductButton"
            href={flipkart.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Flipkart
          </a>
        )}
      </div>
    </div>
  );
}

export default SearchPage;