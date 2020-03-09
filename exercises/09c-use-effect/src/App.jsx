// import useEffect
import React, { useState } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Plugin character name here */}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              alt={/* Plugin character name here */}
              src={/* Plugin character image here */}
              height="250"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text">
              <option></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
