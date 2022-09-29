const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const showBtn = document.querySelector("#show-button");
const outputText = document.querySelector("#output-text");

outputText.style.display = "none";
showBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    // loss logic here
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputText.style.display = "block";
    outputText.style.background = "#F32424";
    outputText.innerText = `Hey the loss is ${loss} and the percent is ${lossPercentage}%`;
  } else if (current > initial) {
    // profit logic here
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputText.style.display = "block";
    outputText.style.background = "#3EC70B";
    outputText.innerText = `Hey the profit is ${profit} and the percent is ${profitPercentage}%`;
  } else {
    // the rest of logic
    outputText.style.display = "block";
    outputText.style.background = "#FCF8E8";
    outputText.innerText = `No pain no gain and no gain no pain`;
  }
}
