import React from "react";
// import something
import "./App.css";

const { images } = require("./images/images.js");

function App() {
  return <div className="App">
  {
    images.map((img, idx) => {
      return (
        <img src={img} key={idx} alt="img" />
      );
    })
  }
  </div>;
}

export default App;
