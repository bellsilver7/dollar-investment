"use strict";

let currentPrice = 1300;
const amountInput = document.querySelector("#amount");
const totalPriceInput = document.querySelector("#amount");
const buyBtn = document.querySelector("#buyBtn");

amountInput.addEventListener("keyup", (e) => {
  const amount = e.target.value;
  document.querySelector("#totalPrice").value = amount * currentPrice;
});

buyBtn.addEventListener("click", buy);
function buy() {
  const req = {
    currentPrice: parseInt(currentPrice),
    amount: parseInt(amountInput.value),
    totalPrice: parseInt(totalPriceInput.value),
  };

  fetch("/investing/buy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
