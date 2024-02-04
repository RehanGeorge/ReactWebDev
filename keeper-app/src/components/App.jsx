import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../data";

function App() {
    const [data, setData] = useState([...notes]);

    function addItem(input) {
        setData(prevValue => {
            return [...prevValue, input]
        });
    }

    function deleteItem(id) {
        console.log(id);
        setData(prevValue => {
            return prevValue.filter((item, index) => index !== id)
        })
        console.log(data);
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {data.map((item, index) => {
        return (
            <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteItem}/>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
