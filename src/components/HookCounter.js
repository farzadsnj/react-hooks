import React, { useState } from "react";

function HookCounter() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
