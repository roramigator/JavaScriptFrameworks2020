import React, { useState } from 'react';
import './CharacterCount.css';

function CharacterCount() {

  let [chars, setChars] = useState(0);
  let [words, setWords] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [timer, setTimer] = useState(0);
  let [array, setArray] = useState();
  let [ok, setOk] = useState(0);
  let [txt, setTxt] = useState("Finish");

  const sentence = 'You, only you, will have stars that can laugh! And when your sorrow is comforted (time soothes all sorrows) you will be content that you have known me... You will always be my friend. You will want to laugh with me. And you will sometimes open your window, so, for that pleasure... It will be as if, in place of the stars, I had given you a great number of little bells that knew how to laugh.';

  const keyPress = (e) => {
    stopWatch(e);
    setArray(e.target.value);
    setChars(e.target.value.length);
    setWords(e.target.value.split(" ").reduce((count, word) => {
      word.length > 0 && count++;
      return count;
    }, 0));
  }

  const validateWords = () => {
    let counter = 0;
    const aCom = sentence.split(" ");
    const aTes = array.split(" ");
    for(let i=0; i<aTes.length; i++){
      if(aCom[i] === aTes[i]){
        counter++;
      }
    }
    setOk(counter);
    setTimer(Math.floor(ok / (minutes + (seconds / 100))));
  };

  const stopWatch = (e) => {
    if(seconds === 59){
      setTimeout(()=>{
        setMinutes(minutes + 1);
        setSeconds(0);
      }, 1000);
    }else{
      setTimeout(()=>{
        setSeconds(seconds + 1);
      }, 1000);
    }
  };


  const res = () => {
    setTxt("Get results!");
    // setOk(validateWords());
    validateWords();
  };

  return (
    <div className="CharacterCount">
      <h5>Records the amount of characters and words you type!</h5>
      <code>{sentence}</code>
      <textarea onChange={e => keyPress(e)}></textarea>
      <p>Timer: {minutes}m {seconds}s</p>
      <p>{timer} wpm</p>
      <p>Words typed: {words}</p>
      <p>Characters typed: {chars}</p>
      <button onClick={res}>{txt}</button>
    </div>
  );
}

export default CharacterCount
