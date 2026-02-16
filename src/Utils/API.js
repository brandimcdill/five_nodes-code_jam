import { getToken } from "./auth";

export const baseUrl = "http://localhost:3000/api";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function createPerson(name, relationship) {
  return fetch(`${baseUrl}/people`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, relationship }),
  }).then(checkResponse);
}

function getPerson(id) {
  return fetch(`${baseUrl}/people/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

function getPeople({ user }) {
  return fetch(`${baseUrl}/people`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

function getCalendar({ user }) {
  return fetch(`${baseUrl}/calendar/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

function deletePerson(id) {
  return fetch(`${baseUrl}/people/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

export { createPerson, getPerson, getPeople, getCalendar, deletePerson };
