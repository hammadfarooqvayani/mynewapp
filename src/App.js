import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(`Incremented: ${newCount}`);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        const newCount = prevCount - 1;
        console.log(`Decremented: ${newCount}`);
        return newCount;
      }
      return prevCount;
    });
  };

  const handleRefresh = () => {
    setCount(0);
    console.log("Count reset to 0");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </header>
    </div>
  );
}

export default App;
