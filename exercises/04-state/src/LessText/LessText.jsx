import React, { useState } from 'react';
import './LessText.css';

function LessText({text, maxLength}) {

  const [renderedText, setText] = useState(text.slice(0, maxLength));

  const hideText = () => {
    setText(text.slice(0, maxLength));
  };

  const showText = () => {
    setText(text);
  };

  return (
    <div className="LessText">
      <p>{renderedText}</p>
      <button onClick={showText}>Read More</button>
      <button onClick={hideText}>Read Less</button>
    </div>
  );
}

export default LessText
