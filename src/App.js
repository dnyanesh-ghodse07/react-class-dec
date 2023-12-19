// How to create and nest components
// How to add markup and styles
// How to display data
// How to render conditions and lists
// How to respond to events and update the screen
// How to share data between components
// react fragments

import React, { useEffect, useState } from "react";
import "./style.css";
import TodoList from "./TodoList";
// import Counter from "./components/Counter";
// import Post from "./components/Post/Post";
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([]);
  const [fetchCount,setFetchCount] = useState(1);

  useEffect(() => {
    const postData = fetch("https://jsonplaceholder.typicode.com/posts");
    postData.then((res) => res.json()).then((data) => setPosts(data));
  }, [fetchCount]);

  const handleFetchCount = () =>{
    setFetchCount(prev => prev + 1)
  }

  return (
    <div className="App">
      {/* <Post/> */}
      {/* <Counter/> */}
      {/* <h1>Hello React</h1>
      <h3>{fetchCount}</h3>
      <div className="list">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        );
      })}
      </div>
      <button onClick={handleFetchCount}>Refetch Posts</button> */}
      <TodoList/>
    </div>
  );
}

export default App;
