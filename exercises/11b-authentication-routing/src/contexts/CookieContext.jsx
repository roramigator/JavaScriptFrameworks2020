import React from 'react';
import CookieMonster from '../utils/CookieMonster';

export const CookieContext = React.createContext();

export const CookieJar = ({children}) => {
  const [cookie,setCookie] = React.useState(CookieMonster.getJar());

  // const prepareCookie = cookieDough => {
  //   CookieMonster.bake(cookieDough);
  //
  //   cantWait(cookieDough);
  // }

  const shelf = (cookieCrave, dough) => {
    cookieCrave(CookieMonster);
    dough && setCookie(dough);
  };

  return (
    <CookieContext.Provider value={[cookie, shelf]}>
      {children}
    </CookieContext.Provider>
  )
}
