import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllItems from "./AllItems";

const ManageInventories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-shelf-45142.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="container  ">
        <h1 className="">All Products 😊</h1>
      </div>
      <div className="">
        <div className="row">
          <div className=" text-center justify-content-center mx-auto p-4">
            {items.map((item) => (
              <AllItems key={item._id} item={item}></AllItems>
            ))}
          </div>
        </div>
        <Link className="btn btn-primary btn-lg my-3 w-25" to="/addItems">
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
