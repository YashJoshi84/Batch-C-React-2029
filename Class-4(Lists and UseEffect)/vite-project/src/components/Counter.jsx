import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  //   useEffect(() => {
  //     console.log('use Effect executed')
  //     document.title = `button clicked for ${count} times`;
  //   }); // run on every state change and at the first render

  //   useEffect(() => {
  //     console.log('use Effect executed')
  //     document.title = `button clicked for ${count} times`;
  //   }, [text]); // run on every dependedt state change and at the first render

  useEffect(() => {
    console.log("use Effect executed");
    document.title = `button clicked for ${count} times`;
  }, []); // it only runs once when componnet renders for tge first time

  // Clean up of useEffect

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}

export default Counter;
