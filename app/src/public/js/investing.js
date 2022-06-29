"use strict";

const currentPrice = document
  .querySelector("#current-price")
  .textContent.replace(",", "");
const amountInput = document.querySelector("#amount");
const totalPriceInput = document.querySelector("#amount");
const buyBtn = document.querySelector("#buyBtn");

amountInput.addEventListener("keyup", (e) => {
  const amount = e.target.value;
  document.querySelector("#totalPrice").value = Math.ceil(
    amount * currentPrice
  );
});

function exchangeRate() {
  fetch("/investing/exchange-rate", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        // location.reload();
      } else {
        if (res.error) return alert("에러발생!");
        alert(res.message);
      }
    })
    .catch((error) => {
      return Error("환율 조회 중 오류 발생");
    });
}

// exchangeRate();

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
