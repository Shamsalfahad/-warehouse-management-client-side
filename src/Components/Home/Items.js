import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Items = ({ item }) => {
  const { _id, img, name, description, price, supplier, Quantity } = item;
  console.log(item);
  const navigate = useNavigate();

  const handleUpdateBtn = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <div className="container my-5 card  ">
        <div className="text-center">
          <img className="w-50" src={img} alt="" />
          <div className="">
            <h6>{name}</h6>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p className="">
              Price: <span className="fw-bold">{price}</span>
            </p>
            <p className="">Quantity: {Quantity}</p>
            <p className="">Supplier: {supplier}</p>
          </div>
          <>
            <button
              onClick={() => handleUpdateBtn(_id)}
              className="btn btn-danger text-white "
            >
              Update Stock
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Items;
