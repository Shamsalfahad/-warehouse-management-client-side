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
        <h4>Wanna smell fresh all day? </h4>
        Good fragrance can instantly lift your mood. And that’s the reason why
        we constantly struggle to make our perfume last all day. Whether it’s
        spending hordes on expensive ones or re-applying them every few hours,
        we have tried it all. But maybe we are just doing it wrong? Turns out,
        the right spots to apply perfumes on our body are the ones we would have
        never thought of.
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
