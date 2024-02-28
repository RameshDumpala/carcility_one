import React, { useState, useEffect } from "react";
import "./Pagination.css";
const Pagination = ({ onChange, total, perPage }) => {
  const [counter, setCounter] = useState(1);
  const [numOfCount, setNumOfCount] = useState(Math.ceil(total / perPage));
console.log(numOfCount,"gf")
  useEffect(() => {
    const value = perPage * counter;
    onChange(value - perPage, value);
  }, [counter]);

  const handleClick = (type) => {
    console.log(type);
    if (type === "backward") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    }

    if (type === "forward") {
      if (numOfCount === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div>
      <button onClick={() => handleClick("backward")}>Prev</button>
      <h3>{counter}</h3>
      <button onClick={() => handleClick("forward")}>Next</button>
    </div>
  );
};

export default Pagination;
