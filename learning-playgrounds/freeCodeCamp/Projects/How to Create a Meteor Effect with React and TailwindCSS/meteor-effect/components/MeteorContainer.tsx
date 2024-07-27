import { Meteors } from "@/components/Meteors";
import React, { useEffect, useState } from "react";

export function MeteorContainer(): React.JSX.Element {
  const [randomNumber, setRandomNumber] = useState<number>(10); // Initial value

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Generate and update random number between 50 and 100
    const newRandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    setRandomNumber(newRandomNumber);

    // Cleanup: Restore original overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // The empty array ensures this effect runs only on mount and unmount

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <Meteors number={randomNumber} />
    </main>
  );
}