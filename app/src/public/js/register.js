"use strict";

const userIdInput = document.querySelector("#user-id");
const userNameInput = document.querySelector("#user-name");
const userPasswordInput = document.querySelector("#user-password");
const userPasswordConfirmInput = document.querySelector(
  "#user-password-confirm"
);
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", register);

function register() {
  if (userPasswordInput.value !== userPasswordConfirmInput.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: userIdInput.value,
    name: userNameInput.value,
    password: userPasswordInput.value,
  };

  fetch("/register", {
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
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 오류 발생"));
    });
}
