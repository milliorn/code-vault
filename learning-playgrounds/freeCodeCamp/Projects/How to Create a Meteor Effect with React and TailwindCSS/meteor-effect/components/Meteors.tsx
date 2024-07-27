import clsx from "clsx";
import React, { useEffect, useState } from "react";

export function Meteors({ number }: { number?: number }): React.JSX.Element {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const rate = Math.floor(Math.random() * (100 - 50 + 1)) + 10; // Generate rate between 50 and 100
    const meteors = new Array(rate).fill(true);

    // Calculate meteor styles dynamically here
    const newStyles = meteors.map(() => ({
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      transform: `rotate(${Math.random() * 360}deg)`,
    }));
    setMeteorStyles(newStyles);
  }, []);

  return (
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
  );
}
