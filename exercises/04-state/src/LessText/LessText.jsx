import React, { useState } from 'react';
import './LessText.css';

function LessText({text, maxLength}) {

  const [renderedText, setText] = useState(text.slice(0, maxLength));

  const showMore = more => {
    more
      ? setText(text)
      : setText(text.slice(0, maxLength));
  }

  return (
    <div className="LessText">
      <p>{renderedText}</p>
      <button onClick={() => showMore(true)}>Read More</button>
      <button onClick={() => showMore(false)}>Read Less</button>
    </div>
  );
}

export default LessText
