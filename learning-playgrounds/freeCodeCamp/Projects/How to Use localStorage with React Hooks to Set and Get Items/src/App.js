import React, { useEffect, useState } from "react";

const ClickButton = () => {
  const storageKey =
    "how-to-use-localstorage-with-react-hooks-to-set-and-get-items";

  const [clickCount, setClickCount] = useState(() => {
    const storedCount = JSON.parse(localStorage.getItem(storageKey));
    return storedCount || 0;
  });

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const handleResetState = () => {
    setClickCount(0);
  };

  const handleSaveState = () => {
    localStorage.setItem(storageKey, JSON.stringify(clickCount));
  };

  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem(storageKey));
    if (storedCount) {
      setClickCount(storedCount);
    }
  }, []);

  return (
    <div>
      <p>Click count: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleResetState}>Reset state</button>
      <button onClick={handleSaveState}>Save state</button>
    </div>
  );
};

export default ClickButton;
