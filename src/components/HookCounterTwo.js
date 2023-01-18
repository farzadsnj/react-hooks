import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCounter] = useState(initialValue);

  const incrementFive = () => {
    setCounter((prevCount) => prevCount + 5);
  };
  return (
    <div>
      count: {count}
      <button onClick={() => setCounter(initialValue)}>Reset</button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrease
      </button>
      <button onClick={incrementFive}>Increase 5</button>
    </div>
  );
}

export default HookCounterTwo;
