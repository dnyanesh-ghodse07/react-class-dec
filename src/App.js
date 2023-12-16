// How to create and nest components
// How to add markup and styles
// How to display data
// How to render conditions and lists
// How to respond to events and update the screen
// How to share data between components
// react fragments

import React from "react";
import "./style.css";
import Post from "./components/Post/Post";
import Counter from "./components/Counter";

function App() {

  return (
    <div className="App">
      <Post/>
      <Counter/>
    </div>
  );
}

export default App;
