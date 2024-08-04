import React, { useRef } from "react";
import "./skincare1.css";
import ProductCard2 from "../ProductCard2/ProductCard2";
import Sproduct from "../../Sproduct";
import Navbar from "../navbar/Navbar";

const Category = () => {
  const foundationRef = useRef(null);
  const compactRef = useRef(null);
  const sunscreenRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="category-background">
        <div className="container-fluid mx-2">
          <div className="row mt-5 mx-2">
            <div className="col-md-3 position-fixed">
              <button
                className="btn4 btn-warning w-75 mb-4"
                onClick={() => scrollToRef(foundationRef)}
              >
                Foundation
              </button>
              <button
                className="btn4 btn-warning w-75 mb-4"
                onClick={() => scrollToRef(compactRef)}
              >
                Compact
              </button>
              <button
                className="btn4 btn-warning w-75 mb-4"
                onClick={() => scrollToRef(sunscreenRef)}
              >
                Sunscreen
              </button>
            </div>
            <div className="col-md-9 offset-md-3">
              <div className="scroll-target" ref={foundationRef}></div>
              <h4 ref={foundationRef} className="category-heading">Foundation</h4>
              <div className="row">
                {Sproduct.foundation.map((product2) => (
                  <div key={product2.id} className="col-lg-4 col-md-4">
                    <ProductCard2 product2={product2} />
                  </div>
                ))}
              </div>

              <div className="scroll-target" ref={compactRef}></div>
              <h4 ref={compactRef} className="category-heading">Compact</h4>
              <div className="row">
                {Sproduct.compack.map((product2) => (
                  <div key={product2.id} className="col-lg-4 col-md-4">
                    <ProductCard2 product2={product2} />
                  </div>
                ))}
              </div>

              <div className="scroll-target" ref={sunscreenRef}></div>
              <h4 ref={sunscreenRef} className="category-heading">Sunscreen</h4>
              <div className="row">
                {Sproduct.suncream.map((product2) => (
                  <div key={product2.id} className="col-lg-4 col-md-4">
                    <ProductCard2 product2={product2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
