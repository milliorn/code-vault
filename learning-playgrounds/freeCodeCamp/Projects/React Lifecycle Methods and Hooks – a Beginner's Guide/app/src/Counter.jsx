import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // This effect runs after every render
    console.log("Component updated");
    console.log("Current count:", count);
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
