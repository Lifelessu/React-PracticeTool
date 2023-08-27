import React, { useState } from "react";

function Add() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const TotalAmount = (event) => {
    event.preventDefault();

    var value1 = parseFloat(event.target.elements.num1.value);
    var value2 = parseFloat(event.target.elements.num2.value);

    setNumber1(value1);
    setNumber2(value2);

    var result = value1 + value2;

    setTotal(result);
  };

  return (
    <div>
      <form onSubmit={TotalAmount}>
        <label>Number 1: </label>
        <input type="text" name="num1" placeholder="Enter number 1" />

        <label>Number 2: </label>
        <input type="text" name="num2" placeholder="Enter number 2" />

        <button type="submit">Submit</button>

        <h1>
          Total: {number1} + {number2} = {total}
        </h1>
      </form>
    </div>
  );
}

export default Add;
