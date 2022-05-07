import React from "react";
import { Link, Navigate } from "react-router-dom";

const AddItems = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
    const img = event.target.url.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const Quantity = event.target.Quantity.value;
    const supplier = event.target.supplier.value;
    const description = event.target.description.value;

    const Items = { img, name, price, Quantity, supplier, description };

    fetch("https://cryptic-shelf-45142.herokuapp.com/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Items),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item added success");
      });
  };
  return (
    <div className="bg-light rounded container mt-4 rounded">
      <h2>Add New Products </h2>
      <form onSubmit={handleAddItems}>
        <input
          className="p-2 m-2 w-50"
          required
          type="url"
          placeholder="Insert img url"
          name="url"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="Insert Name"
          name="name"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="number"
          required
          placeholder="insert Price"
          name="price"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="number"
          required
          placeholder="insert quantity"
          name="Quantity"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="supplier"
          name="supplier"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="Description"
          name="description"
        />
        <br />
        <input
          className="bg-primary btn text-white"
          type="submit"
          value="Add items"
        />
      </form>
    </div>
  );
};

export default AddItems;
