import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    //here data-test is visible in browser so we dont want to show in browser console
    // we have babel plugin => babel remove react properties plugin
    //after included this in package json config to be updated
    //steps to remove data-test in production env
    //npm install --save-dev babel-plugin-react-remove-properties
    //npm run eject
    //update babel config
    //create production build npm run build=> npm run serve
    <div className="App" data-test="container-app">
      <span>title</span>
      <h1 data-test="counter-display">
        The counter is currently&nbsp;<span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default App;
