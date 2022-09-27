const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector('#stocks-quantity');
const showBtn = document.querySelector('#show-button');
const outputText = document.querySelector('#output-text');

showBtn.addEventListener("click", submitHandler)

function submitHandler(){

  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
   
  if(!ip && !qty && !curr){
    alert("please fill out all fields");
  }
  calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(msg){
  outputText.innerText = msg;
}
  
function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
      // loss logic here
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss/initial) * 100;
     showOutput( `Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if(current > initial){
          // profit logic here
          var profit = (current - initial) * quantity;
          var profitPercentage = ( profit / initial) * 100;
            showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`) 
    }else{
        // the rest of logic
      showOutput(`No pain no gain and no gain no pain`)
    }
}

calculateProfitAndLoss(10,10,10);
calculateProfitAndLoss(10,10,100);
calculateProfitAndLoss(100,10,10);







