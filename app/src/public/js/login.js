"use strict";

const userIdInput = document.querySelector("#userId");
const userPasswordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    userId: userIdInput.value,
    userPassword: userPasswordInput.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log());
}
