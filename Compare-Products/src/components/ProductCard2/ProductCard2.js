import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard2.css';

function ProductCard2({ product2, compareList, setCompareList }) {
  const navigate = useNavigate();

  // const handleAddToCompare = () => {
  //   if (!product2) {
  //     console.error('Product is undefined');
  //     return;
  //   }

  //   const updatedCompareList = [...compareList, product2];
  //   setCompareList(updatedCompareList);

  //   navigate('/compare');
  // };

  return (
    <div className="card mb-4">
      {/* Render the product2 card even if product2 is undefined */}
      {product2 && (
        <>
          <img src={product2.image} className="card-img-top" alt={product2.name} />
          <div className="card-body">
            <h5 className="card-title">{product2.name}</h5>
            <span className="short-name">{product2.shortName}</span>
            <span className="full-name">{product2.name}</span>
            <p className="card-title">{product2.description}</p>
            <button className="btn btn-primary" >Select</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard2;