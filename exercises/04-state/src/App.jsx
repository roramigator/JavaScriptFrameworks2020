import React from "react";
import "./App.css";
// Import LessText here
// Import CharacterCount here
import LessText from './LessText/LessText';
import CharacterCount from './CharacterCount/CharacterCount';

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        <LessText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          maxLength={26}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
