import React from 'react';
import {Switch,Route} from 'react-router-dom';

import App from './App';
import Users from './protected/Users';
import UtilRoute from './protected/UtilRoute';
import {CookieJar} from '../contexts/CookieContext';



const Routes = () => {
  return (
    <CookieJar>
      <Switch>
        <Route exact path="/" component={App} />
        <UtilRoute exact path="/users" component={Users} />
      </Switch>
    </CookieJar>
  )
}

export default Routes
