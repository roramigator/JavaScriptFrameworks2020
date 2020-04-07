import React from 'react';
import {Route,Redirect} from 'react-router-dom';

import {CookieContext} from '../../contexts/CookieContext';

const UtilRoute = ({component: Component}) => {
  const [cookie] = React.useContext(CookieContext);
  return <Route render={(...props)=>{
    return cookie ? <Component {...props} /> : <Redirect {...props} to='/' />
  }} />
}

export default UtilRoute
