"use strict";

const userIdInput = document.querySelector("#user-id");
const userPasswordInput = document.querySelector("#user-password");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", login);

function login() {
  if (!userIdInput.value) {
    return alert("아이디를 입력해주세요.");
  }
  if (!userPasswordInput.value) {
    return alert("비밀번호를 입력해주세요.");
  }
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
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.error) return alert("에러발생!");
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 오류 발생"));
    });
}
