import { baseUrl } from "./api";

function getToken(token) {
  return localStorage.getItem("jwt", token);
}

function setToken(token) {
  return localStorage.setItem("jwt", token);
}

function checkToken(token) {
  const user = JSON.parse(localStorage.getItem("user"));
}

function signUp(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
}

function signIn(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
}

function signout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  return Promise.resolve();
}

export { getToken, setToken, signUp, signIn, signout, checkToken };
