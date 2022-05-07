import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const AllItems = ({ item }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-shelf-45142.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { img, name, description, price, Quantity, supplier, _id } = item;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete? ");
    if (proceed) {
      console.log("deleting user id", id);
      const url = `https://cryptic-shelf-45142.herokuapp.com/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="container my-5 w-50 ">
        <Card className="">
          <img className=" m-4 img-fluid " src={img} alt="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p className="">
              Price: <span className="fw-bold">{price}</span>
            </p>
            <p className="">Quantity: {Quantity}</p>
            <p className="">Supplier: {supplier}</p>
          </Card.Body>
          <Card.Footer>
            <small>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-danger text-white "
              >
                Delete
              </button>
            </small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default AllItems;
