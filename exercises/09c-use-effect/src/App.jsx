// import useEffect
import React, { useState } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */

   const [characters, setCharacters] = useState([]);
   const [id, setId] = useState(1);
   const [char, setChar] = useState();

   React.useEffect(()=>{
     (async () => {
        const chars = await fetch(`https://rickandmortyapi.com/api/character/`).then(set=>set.json());
        setCharacters(chars.results);
     })();
   },[]);

   React.useEffect(()=>{
     fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then(set=>set.json())
       .then(res=>setChar([res]))
   },[id]);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <div id="main-img">
          {
            char && char.map((c, idx)=>{
              return (
                <div key={'character-'+idx}>
                  <h1 id="title-head" key={'header-'+idx}>{c.name}</h1>
                  <img
                    alt={c.name}
                    src={c.image}
                    heigth='250'
                    key={'img-'+idx}
                  />
                </div>
              )
            })
          }
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" onChange={e=>setId(e.target.value)}>
              {
                characters && characters.map((char,idx)=>{
                  return (
                    <option value={char.id} key={'option-'+idx}>{char.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
