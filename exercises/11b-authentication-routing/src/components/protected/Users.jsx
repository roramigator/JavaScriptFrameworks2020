import React from 'react';

import {CookieContext} from '../../contexts/CookieContext';

const Users = (...props) => {
  const [cookie,cookieCrave] = React.useContext(CookieContext);
  console.log("user: ", props)
  React.useEffect(()=>{
    fetch('http://localhost:7000/cookie/users',{
      method: 'GET',
      headers: {
       'Content-Type': 'application/json'
     },
     params: {
       id: cookie
     }
   })
    .then(set => set.json())
    .then(res=>console.log(res.data))
  },[cookie]);

  return (
    <>
      <p>Users</p>
    </>
  )
};

export default Users
