import React, { useRef } from "react";
import "../SkinCare/skincare1.css";
import ProductCard2 from "../ProductCard2/ProductCard2";
import Sproduct from "../../Sproduct";
import './Haircare.css';

const Category = () => {
  // Create refs for the <h4> elements
  const HairoilRef = useRef(null);
  const ShampooRef = useRef(null);
  const ConditionerRef = useRef(null);
  const HairserumRef = useRef(null);


  // Function to scroll to the specified ref
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 position-fixed">
            {/* Add onClick handlers to the buttons */}
            <button
              className="btn4 btn-warning w-75 mb-4"
              onClick={() => scrollToRef(HairoilRef)}
            >
              Hair Oil
            </button>
            <button
              className="btn4 btn-warning w-75 mb-4"
              onClick={() => scrollToRef(ShampooRef)}
            >
              Shampoo
            </button>
            <button
              className="btn4 btn-warning w-75 mb-4"
              onClick={() => scrollToRef(ConditionerRef)}
            >
              Conditioner
            </button>
            <button
              className="btn4 btn-warning w-75 mb-4"
              onClick={() => scrollToRef(HairserumRef)}
            >
              Hair serum
            </button>
          </div>
          <div className="col-md-9  offset-md-3">
            <div className="scroll-target" ref={HairoilRef}></div>
            <h4 ref={HairoilRef} className="category-heading">Hair Oil</h4>

            <div className="row">
              {Sproduct.Hairoil.map((product2) => (
                <div key={product2.id} className="col-lg-4 col-md-4">
                  <ProductCard2 product2={product2} />
                </div>
              ))}
            </div>

            <div className="scroll-target" ref={ShampooRef}></div>
            <h4 ref={ShampooRef} className="category-heading">Shampoo</h4>
            <div className="row">
              {Sproduct.Shampoo.map((product2) => (
                <div key={product2.id} className="col-lg-4 col-md-4">
                  <ProductCard2 product2={product2} />
                </div>
              ))}
            </div>

            <div className="scroll-target" ref={ConditionerRef}></div>
            <h4 ref={ConditionerRef} className="category-heading">Conditioner</h4>
            <div className="row">
              {Sproduct.conditioner.map((product2) => (
                <div key={product2.id} className="col-lg-4 col-md-4">
                  <ProductCard2 product2={product2} />
                </div>
              ))}
            </div>

            <div className="scroll-target" ref={HairserumRef}></div>
            <h4 ref={HairserumRef} className="category-heading">Hair serum</h4>

            <div className="row">
              {Sproduct.hairserum.map((product2) => (
                <div key={product2.id} className="col-lg-4 col-md-4">
                  <ProductCard2 product2={product2} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
