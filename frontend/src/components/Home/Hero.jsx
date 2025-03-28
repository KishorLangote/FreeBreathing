import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-center text-center text-md-start mb-5" style={{ width: "100%", height: "100%"}}>
        
        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="fw-bold display-3">Discover Your Next Great Read</h1>
          <p className="mt-4 fs-5">
            Expand your mind, nourish your soul. Explore a library where stories breathe freely. A library without limits discover the joy of reading, anytime, anywhere...
          </p>
          <div className="mt-4 d-flex justify-content-center justify-content-md-start">
            <Link to="/all-books" className="bg-btn fw-bold fs-5 px-4 py-3">
              Discover Books
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
          <img
            src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1741216590/hero-current-logo_xghrad.jpg"
            alt="hero-logo"
            className="img-fluid rounded"
            style={{ objectFit: "cover", width: "90%", height: "auto" }}
          />
        </div>

      </div>
      <hr />
    </div>
  );
};

export default Hero;

