import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect-update");
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCounter(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterFive;
