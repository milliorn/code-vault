import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clear the timer when the component is unmounted or when seconds is updated to prevent memory leaks
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <h1>Timer Component</h1>
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
