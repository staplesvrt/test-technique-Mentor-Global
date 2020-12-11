import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [print, setPrint] = useState([]);
  const pow = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((data) => {
      console.log(data.data);
      });
  };
  const show = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      console.log(data.data);
      setPrint(data.data);
    });
  };
  return (
    <div className="App">
      <div type="button" className="btn btn-primary btn-lg" onClick={show}>show</div>
      {print.map((user) => (
        <div type="button" className="user_id" onClick={pow} key={user.id}>{user.id}.
          <h1 className="user_title" key={user.title}>
            {user.title}
          </h1>
          <p className="user_body" key={user.body}>
            {user.body}
          </p>
        </div>
      ))}
    </div>
  );
}
export default App;
