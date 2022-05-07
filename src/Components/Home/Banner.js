import React from "react";


const Banner = () => {
  return (
    <section>
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('http://smellzone.in/wp-content/uploads/2021/03/Perfume-Banner-compressed.jpg')",
        height: "550px",
      }}
    >
      <div
        className="mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Welcome To Cologne Gallery</h1>
            <h4 className="mb-3">Find Your Best Cologne</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
