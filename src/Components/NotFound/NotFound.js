import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-danger fs-4">
        ops! sorry the page you are searching is unavailable
        
      </h1>
      <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://devbeep.com/wp-content/uploads/2022/01/ccccccccc.png')",
        height: "400px",
      }}
    ></div>
      
    </div>
  );
};

export default NotFound;
