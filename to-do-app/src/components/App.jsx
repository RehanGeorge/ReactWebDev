import React, { useState } from "react";
import ListItem from "./ListItem";
import data from "./data";

function App() {
  const [inputText, setInputText] = useState("");
  
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick(event) {
    console.log(event.target);
    data.push(inputText);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
        <ListItem items={data} />
      </div>
    </div>
  );
}

export default App;
