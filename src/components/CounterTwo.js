import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrease":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increase2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrease2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Count - {count.firstCounter}</div>
      <div>Second Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        decrease
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increase2", value: 5 })}>
          increase 2
        </button>
        <button onClick={() => dispatch({ type: "decrease2", value: 5 })}>
          decrease 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "increase", value: 5 })}>
        increase 5
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 5 })}>
        decrease 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
