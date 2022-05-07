import React from "react";

const BeFresh = () => {
  return (
    <div
      className="d-lg-flex my-5 
    align-items-center  container"
    >
      <p className=" p-5 me-5 text-dark rounded"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <h4>How to Make Cologne Last? 😊 </h4>
        Just like that expensive bottle of liqueur you’ve been cherishing, don’t store cologne in hot, sunny places like your bathroom or on a dresser top. Find a little shelf for it in the closet. Sun and heat will break down the components faster and make the alcohol and water evaporate sooner. A good cologne should last from three to five years. (Some people say to replace in a year, but those people are also probably selling cologne.) Rancid oils and a higher concentration of alcohol can affect the way the product smells and might even harm your skin..
      </p>
      <img
        className="rounded img-fluid"
        src={
          "https://c.tenor.com/gFP43rcB6kAAAAAC/spray-perfume.gif"
        }
        alt=""
      />
    </div>
  );
};

export default BeFresh;
