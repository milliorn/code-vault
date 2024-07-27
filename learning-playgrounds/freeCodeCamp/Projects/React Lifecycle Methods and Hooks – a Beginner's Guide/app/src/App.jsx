import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Timer from "./Timer";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This is where you can perform initial setup.

    // In this example, we simulate fetching data from an API after the component has mounted.
    // We use a setTimeout to mimic an asynchronous operation.
    const fetchData = () => {
      setTimeout(() => {
        const fetchedData = "This data was fetched after mounting.";
        setData(fetchedData);
      }, 2000); // Simulate a 2-second delay
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>useEffect Example</h1>
      {data ? (
        <>
          <p>Data: {data}</p>
          <p>
            <Counter />
          </p>
          <p>
            <Timer />
          </p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;
