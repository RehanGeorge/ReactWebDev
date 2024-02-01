import React from "react";
import { useState } from "react";

function App() {
  const button = document.querySelector("button");

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleHover() {
    setMouseOver(true);
  }

  function handleOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleOut}>Submit</button>
    </div>
  );
}

export default App;
