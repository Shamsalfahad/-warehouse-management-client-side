import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { itemsId } = useParams();
  const [items, setItems] = useState({});
  const [number, setNumber] = useState(1);
  const [remainingQuantity, setRemainingQuantity] = useState(0);
  const [updateQuantity, setUpdateQuantity] = useState(0);

  // let count = 0;
  // const handleDelivered = (id) => {
  //   let count = number + 1;
  //   setNumber(count);

  //   fetch(`https://cryptic-shelf-45142.herokuapp.com/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(remainingQuantity),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});
  // };

  // const handleRestock = (id) => {
  //   fetch(`https://cryptic-shelf-45142.herokuapp.com/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(remainingQuantity),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});

  // const handleUpdateQuantity = (e) => {
  //   setUpdateQuantity(e.target.value);
  // };
  // const inputValue = parseInt(updateQuantity);

  useEffect(() => {
    const url = `https://cryptic-shelf-45142.herokuapp.com/items/${itemsId}`;
    fetch(url).then((res) =>
      res.json().then((data) => {
        setItems(data);
        // const intQuantity = parseInt(data.Quantity);
        // // const updateQnty = parseInt(updateQuantity);
        // // console.log();
        // const remain = intQuantity + inputValue;
        // setRemainingQuantity(remain);
        // const remaining = Math.abs(intQuantity - number);
        // setRemainingQuantity(remaining);
      })
    );
  }, []);

  // number, inputValue

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="container d-lg-flex d-md-block d-sm-block justify-content-center align-items-center ">
        <Card className="bg-light ">
          <Card.Body>
            <Card.Title>
              {items.name} ({items.no})
            </Card.Title>
            <Card.Text>{items.description}</Card.Text>
            <p>
              Price: <span className="fw-bold">{items.price}</span>
            </p>
            <p className="">Quantity: {items.Quantity}</p>
            <p className="">Supplier: {items.supplier}</p>
            <p className="">
              Stock:{items.Quantity} <span className="text-muted">/left</span>
            </p>
            <button
              // onClick={handleDelivered(items._id)}
              className="btn btn-primary"
            >
              Delivered
            </button>
          </Card.Body>
        </Card>
        <img className=" img-fluid  " src={items.img} alt="" />
      </div>
      <div className="bg-light container p-5 rounded">
        <form onSubmit={handleForm}>
          <h3>Restock the items</h3>
          <input
            // onBlur={handleUpdateQuantity}
            className="p-1 border-2 rounded bg-light"
            type="number"
            placeholder="insert items (Number) "
          />
          <br />
          <button
            // onClick={handleRestock(items._id)}
            className="btn btn-primary btn-sm mt-2"
          >
            restock
          </button>
        </form>
      </div>

      <Link
        to="/manageInventory"
        className="btn btn-warning text-black fs-5 my-3"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Inventory;
