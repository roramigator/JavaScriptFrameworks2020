import Cookies from 'js-cookie';

const cookieJar = "shelf";

const set = (cookie) => {
  Cookies.set(cookieJar,cookie,{expires: 1});
}

const get = () => {
  return Cookies.get(cookieJar);
}

const remove = () => {
  Cookies.remove(cookieJar);
}

export default {
  bake: set,
  getJar: get,
  eat: remove
}
