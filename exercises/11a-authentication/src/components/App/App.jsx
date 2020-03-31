import React, { useState } from "react";
import LoggedInContent from "../LoggedInContent/LoggedInContent";
// You may need to import additional things here

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('token'));
  /**
   * Be sure to set this when a user tries to login with invalid credentials.
   */
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(localStorage.getItem('token'),isUserLoggedIn);
  /**
   * You may need to add more things to state
   */
  const login = token => {
    /**
     * Complete me
     */
     localStorage.setItem('token', token);
     setIsUserLoggedIn(true);
     setIsLoading(false);
  };

  const logout = () => {
    /**
     * Complete me
     */
     localStorage.removeItem('token');
     setIsUserLoggedIn(false);
     setUsers([]);
  };

  React.useEffect(()=>{
    const token = localStorage.getItem('token');
    isUserLoggedIn && (
      fetch('http://localhost:7000/jwt/users',{
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json'
        }
      })
      .then(set => set.json())
      .then(res=>setUsers(res.data))
    )
  },[isUserLoggedIn]);

  const handleLoginRequest = e => {
    /**
     * Complete me.
     */
     e.preventDefault();
     setIsLoading(true);
     fetch('http://localhost:7000/jwt/login',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         username: username,
         password: password
       })
     })
     .then(set=> set.json())
     .then(res => res.token ? login(res.token) : Promise.reject(res.message))
     .catch(msg => setErrorMessage(msg), setIsLoading(false));
  };

  /**
   * If the user is logged in, you should render the <LoggedInContent /> component instead.
   */
  if(isUserLoggedIn){
    return <LoggedInContent logout={logout} users={users} />
  }else{
  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" onSubmit={handleLoginRequest}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={e => setUsername(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}}

export default App;
