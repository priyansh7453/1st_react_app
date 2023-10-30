import React, { useState } from "react";

const CandyShop = () => {
  const [candies, setCandies] = useState([
    {
      name: "Melody",
      description: "Sweet Taste And Better",
      price: 5,
      quantity: 0,
    },
    {
      name: "Eclairs",
      description: "Good and Best One",
      price: 10,
      quantity: 0,
    },
    {
      name: "HoneyBell",
      description: "Milky Candy",
      price: 15,
      quantity: 0,
    },
  ]);

  const updateQuantity = (index, change) => {
    const updatedCandies = [...candies];
    updatedCandies[index].quantity += change;
    setCandies(updatedCandies);
  };

  const totalItems = candies.reduce(
    (total, candy) => total + candy.quantity,
    0
  );
  const totalPrice = candies.reduce(
    (total, candy) => total + candy.price * candy.quantity,
    0
  );

  const orderCandies = () => {
    // Your logic to process the ordered candies
    console.log(
      "Order placed:",
      candies.filter((candy) => candy.quantity > 0)
    );
  };

  return (
    <div>
      {candies.map((candy, index) => (
        <div key={index}>
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <p>Price: ${candy.price}</p>
          <button onClick={() => updateQuantity(index, 1)}>+</button>
          <span>{candy.quantity}</span>
          <button onClick={() => updateQuantity(index, -1)}>-</button>
        </div>
      ))}
      <div>
        <p> Total Items: {totalItems}</p>
        <p> Total Price: ${totalPrice}</p>
        <button onClick={orderCandies}>Order</button>
      </div>
    </div>
  );
};

export default CandyShop;
