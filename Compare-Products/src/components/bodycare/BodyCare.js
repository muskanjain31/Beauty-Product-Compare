import React, { useRef } from "react";
import "../SkinCare/skincare1.css";
import ProductCard2 from "../ProductCard2/ProductCard2";
import Sproduct from "../../Sproduct";
import './Bodycare.css';

const Category = () => {
  // Create refs for the <h4> elements
  const BodylotionRef = useRef(null);
  const BodyscrubRef = useRef(null);

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
              onClick={() => scrollToRef(BodylotionRef)}
            >
              Body Lotion
            </button>
            <button
              className="btn4 btn-warning w-75 mb-4"
              onClick={() => scrollToRef(BodyscrubRef)}
            >
              Body Scrub
            </button>
           
          </div>
          <div className="col-md-9  offset-md-3">
            <div className="scroll-target" ref={BodylotionRef}></div>
            <h4 ref={BodylotionRef} className="category-heading">Body Lotion</h4>

            <div className="row">
              {Sproduct.bodylotion.map((product2) => (
                <div key={product2.id} className="col-lg-4 col-md-4">
                  <ProductCard2 product2={product2} />
                </div>
              ))}
            </div>

            <div className="scroll-target" ref={BodyscrubRef}></div>
            <h4 ref={BodyscrubRef} className="category-heading">Body Scrub</h4>
            <div className="row">
              {Sproduct.bodysrub.map((product2) => (
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

