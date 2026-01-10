function calculate() {
  let amount = document.getElementById("amount").value;
  let percentage = document.getElementById("percentage").value;

  let result = (percentage / 100) * amount;

  document.getElementById("result").innerText =
    "Result: " + result;
}
function calculate1() {
  let amount1 = document.getElementById("amount1").value;
  let number = document.getElementById("otherNumber").value;

  let result1 = (number / amount1) * 100;

  document.getElementById("result1").innerText =
    "Result: " + result1 + "%";
}

