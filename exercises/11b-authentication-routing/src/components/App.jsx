import React from "react";
import {CookieContext} from '../contexts/CookieContext';
import "./App.css";

function App({history}) {
  const [user,setUser] = React.useState("");
  const [pass,setPass] = React.useState("");
  // const [isUserLoggedIn] = React.useState()

  const [cookie,cookieCrave] = React.useContext(CookieContext);
  cookie && history.push("/users");

  const login = e => {
    e.preventDefault();
    fetch('http://localhost:7000/cookie/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
    .then(set=>set.json())
    .then(res => {
      cookieCrave(cookieMonster => cookieMonster.bake(res.uuid), res.uuid);
    });
  }

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" onSubmit={login}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={user}
            onChange={e=>setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mr-3"
            required={true}
            value={pass}
            onChange={e=>setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
    </div>
  );
}

export default App;
