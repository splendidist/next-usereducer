"use client";
import { useReducer } from "react";

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// export default function Counter() {
//   const [count, dispatch] = useReducer(counterReducer, 0);
//   return (
//     <div className="container">
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <div className="buttons">
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>
//           Decrement
//         </button>
//       </div>
//       <div className="buttons">
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }

function reducer(prevState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        count: prevState.count + action.payload,
      };
    case "decrement":
      return {
        ...prevState,
        count: prevState.count - action.payload,
      };
    case "incrementModifier":
      return {
        ...prevState,
        modifier: prevState.modifier + 1,
      };
    case "decreaseModifier":
      return {
        ...prevState,
        modifier: prevState.modifier - 1,
      };
  }
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0, modifier: 10 });

  return (
    <div className="container">
      <h2>useReducer with another state variable</h2>
      <p>Count: {state.count}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          + 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          - 1
        </button>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "incrementModifier" })}>
          Increase modifier
        </button>
        <button onClick={() => dispatch({ type: "decreaseModifier" })}>
          Decrease modifier
        </button>
        <button
          onClick={() =>
            dispatch({ type: "increment", payload: state.modifier })
          }
        >
          Increase by {state.modifier}
        </button>
      </div>
    </div>
  );
}
