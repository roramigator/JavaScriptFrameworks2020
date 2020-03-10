// Import useEffect here
import React, { useState } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */
   const [quote, setQuote] = useState("Loading Quote")

  /**
   * Make an AJAX call with the useEffect hook
   */
   React.useEffect(()=>{
     fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(r=>r.json())
      .then(res => {
        setQuote(res);
      })
      .catch(()=> {
        setQuote("Error Fetching Quote")
      })
   }, []);

  return (
    <div className="bg-warning text-center">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      className="mt-4"
    />
    <div className="container">
      {/* Display a loading message */}
      {/* Display an error message if the API fails */}
      <blockquote
        id="quote"
        className="blockquote bg-dark text-white border-0 mb-4"
      >
        {/* Complete me */}
        {quote}
      </blockquote>
    </div>
  </div>
  );
}

export default App;
