import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  // counting the value
  const increment = () => {
    if (count >= 20) {
      alert("you can not increase more than 20");
    } else {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count <= 0) {
      alert("you can not decrease more than 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>value : {count}</h2>

      <button id="increase" onClick={increment}>
        increase Count
      </button>
      <br />
      <br />
      <button id="decrease" onClick={decrement}>
        Decrease Count
      </button>
    </>
  );
}

export default App;
