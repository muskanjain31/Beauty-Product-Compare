
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, compareList, setCompareList }) {
  const navigate = useNavigate();

  const handleAddToCompare = () => {
    if (!product) {
      console.error('Product is undefined'); // Handle the case where product is undefined
      return;
    }

    // Add the product to the compare list
    const updatedCompareList = [...compareList, product];
    setCompareList(updatedCompareList);

    // Navigate to the "Add to Compare" page
    navigate('/compare');
  };

  return (
    <div className="card mb-4">
      {/* Render the product card even if product is undefined */}
      {product && (
        <>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <button className="btn btn-primary" onClick={handleAddToCompare}>Select</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
