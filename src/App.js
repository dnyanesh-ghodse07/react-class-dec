// How to create and nest components
// How to add markup and styles
// How to display data
// How to render conditions and lists
// How to respond to events and update the screen
// How to share data between components
// react fragments

// 1) create react app
// 2) component create / nest
// 3 data pass parent to child
// 4 display data
// style the app
// conditional rendering
// list rendering

import React, { useState } from "react";
import Fruit from "./components/Fruit/Fruit";
import "./style.css";

function App() {
  const [name, setName] = useState("Hello React");

  const handleTextChange = () => {
    setName("Amazing React");
  };

  const styles = {
    color: "red",
    background: "#333",
  };
  const fruits = [
    {
      id: "342653ytersfd",
      title: "Apple",
      img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "sndbj326",
      title: "Orange",
      img: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "hjg325",
      title: "Banana",
      img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const showTitle = true;

  return (
    <div className="App">
      {showTitle ? (
        <h1 className="name" style={styles}>
          {name}
        </h1>
      ) : (
        <h1>No title</h1>
      )}

      <h1>List Rendering</h1>
      {fruits.map((fruit) => (
        <Fruit key={fruit.id} fruit={fruit} />
      ))}
      <button onClick={handleTextChange}>Change Text</button>
    </div>
  );
}

export default App;
