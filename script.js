function calculate() {
  let amount = document.getElementById("amount").value;
  let percentage = document.getElementById("percentage").value;

  let result = (percentage / 100) * amount;

  document.getElementById("result").innerText =
    "Result: " + result;
}
