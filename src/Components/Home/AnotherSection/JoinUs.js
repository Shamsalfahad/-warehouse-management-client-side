import React from "react";


const JoinUs = () => {
  return (
    <div
    style={{
      backgroundImage:
        "url('https://assets.teenvogue.com/photos/580e18bf779f67305d16a926/16:9/w_2580,c_limit/_fall-fragrance-fb.jpg')",
      height: "550px",
    }}
      className="container mt-5 "
    >
      <div className="">
        <p className="mt-5 ">
        <div
        className="mask mt-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="d-flex justify-content-center align-items-center h-50">
          <div className="text-white">
            <h1 className="text-danger">50% OFF</h1>
          </div>
        </div>
      </div>
          <h3>Contact Us</h3>
          for you betterment and a bright future, we hire the best person, let's
          talk us join us there will be huge fun, make hire call us
        </p>
        <button className="btn btn-secondary mb-3">Make a phone call</button>
      </div>

      
    </div>
  );
};

export default JoinUs;
