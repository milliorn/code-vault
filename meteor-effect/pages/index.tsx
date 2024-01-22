import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  // Initialize state for random number
  const [randomNumber, setRandomNumber] = useState<number>(10);

  // Effect to generate and update random number between 50 and 100 on mount
  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    setRandomNumber(newRandomNumber);
  }, []); // The empty array ensures this effect runs only on mount and unmount

  // Initialize state for meteor styles
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  // Effect to calculate meteor styles dynamically on mount
  useEffect(() => {
    // Generate a rate between 50 and 100 for the number of meteors
    const rate = Math.floor(Math.random() * (100 - 50 + 1)) + 10;
    // Creates an array of the desired length without filling the array with any specific values, which aligns with the purpose of creating an array to represent the number of meteors you want to render.
    const meteors = Array.from({ length: rate });

    // Calculate meteor styles dynamically here
    const newStyles = meteors.map(() => ({
      // Generate animation delay and duration for each meteor
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
      // Set left and top to 70 to prevent overflow issues with meteors
      left: `${Math.random() * 70}vw`,
      top: `${Math.random() * 70}vh`,
      transform: `rotate(${Math.random() * 360}deg)`,
    }));
    setMeteorStyles(newStyles);
  }, []);

  // Render the meteors
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="meteors-container">
        {meteorStyles.map((style, idx) => (
          <span
            key={"meteor" + idx}
            className={clsx(
              "animate-meteor-effect absolute h-1 w-1 rounded-[9999px] bg-blue-400 shadow-[0_0_0_8px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#2196F3] before:to-transparent"
            )}
            style={style}
          ></span>
        ))}
      </div>
    </div>
  );
}
