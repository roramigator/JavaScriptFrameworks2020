import React, { useState } from 'react';
import './CharacterCount.css';

function CharacterCount() {

  let [chars, setChars] = useState(0);
  let [words, setWords] = useState(0);

  const keyPress = () => {
    setChars(document.querySelector('textarea').value.length);

    setWords(document.querySelector('textarea').value.split(" ").reduce((count, word) => {
      word.length > 0 && count++;
      return count;
    }, 0));

  }

  return (
    <div className="CharacterCount">
      <p>Records the amount of words you type!</p>
      <textarea onChange={keyPress}></textarea>
      <p>Character Count: {chars}</p>
      <p>Words Count: {words}</p>
    </div>
  );
}

export default CharacterCount
