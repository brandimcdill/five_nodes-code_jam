import {baseUrl} from "./api";
import {checkResponse} from "./api";

function getToken() {
  return localStorage.getItem("jwt");
}

function setToken(){
    return localStorage.setItem("jwt");
}

function signUp(data){
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }).then(checkResponse);
}

function signIn(data){
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }).then(checkResponse);
}

function signout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    return Promise.resolve();
}

export { getToken, setToken, signUp, signIn, signout };