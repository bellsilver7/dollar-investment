"use strict";

const currentPrice = document
  .querySelector("#current-price")
  .textContent.replace(",", "");
const amountInput = document.querySelector("#amount");
const totalPriceInput = document.querySelector("#total-price");
const buyBtn = document.querySelector("#buy-btn");

amountInput.addEventListener("keyup", (e) => {
  const amount = e.target.value;
  totalPriceInput.value = Math.ceil(currentPrice) * amount;
});

buyBtn.addEventListener("click", buy);

function buy() {
  if (!amountInput.value) {
    return alert("수량을 입력해주세요.");
  }

  const req = {
    price: parseInt(currentPrice),
    amount: parseInt(amountInput.value),
  };

  fetch("/investing/buy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("구매 성공");
        location.reload();
      } else {
        if (res.error) return alert("에러발생!");
        alert(res.message);
      }
    })
    .catch((error) => {
      console.error(new Error("구매 중 오류 발생"));
    });
}
