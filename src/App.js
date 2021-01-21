import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [LLL, setLLL] = useState(0);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    // setLLL(true);
    setLLL((prev) => prev + 1);
  }, [show]);

  console.log(show, LLL);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Init message
      <button onClick={handleClick}>Click me tot show!</button>
      {show && <button>ITQS</button>}
      {LLL > 1 && <div>Some words</div>}
      <p>learn react</p>
      Hello Nina and Stas!!!
    </div>
  );
}

export default App;
