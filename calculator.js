let calculation = localStorage.getItem("calculation") || "";
displayCalculation();

function updateCalculation(operation) {
  calculation += operation;
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  if (calculation === "") {
    //to display 0 when button is reset
    document.querySelector(".js-display-result").innerHTML = "0";
  } else {
    document.querySelector(".js-display-result").innerHTML = calculation;
  }
}
