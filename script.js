// DOM elements

const input = document.getElementById("input--field");
const button1 = document.getElementById("num1");
const button2 = document.getElementById("num2");
const button3 = document.getElementById("num3");
const button4 = document.getElementById("num4");
const button5 = document.getElementById("num5");
const button6 = document.getElementById("num6");
const button7 = document.getElementById("num7");
const button8 = document.getElementById("num8");
const button9 = document.getElementById("num9");
const button0 = document.getElementById("num0");
const buttonPlus = document.getElementById("opPlus");
const buttonMinus = document.getElementById("opMinus");
const buttonEuqals = document.getElementById("opEquals");
const buttonClear = document.getElementById("opClear");

let initialDipslay = String("0");
input.value = initialDipslay;

let numbers = [];
let numbersToDisplay = "";
const displayAndStoreNumber = function (button) {
  buttonNo = button.target.textContent;
  numbers.push(buttonNo);
  numbersToDisplay += String(button.target.textContent);
  input.value = numbersToDisplay;
  // console.log(numbersToDisplay);
  // console.log(numbers);
};

const clearButton = function () {
  numbers = [];
  numbersToDisplay = "";
  input.value = initialDipslay;
  console.log("all clear");
};

const operationButton = function (button) {
  let storeNumbersHere = [];
  if (button.target.textContent == "+") {
    storeNumbersHere.push(numbers.join(""));
    numbersToDisplay = initialDipslay;
    input.value = initialDipslay;
    numbers = [];
    console.log(storeNumbersHere);
  } else if (button.target.textContent == "-") {
    console.log("im a minus -");
  } else {
    console.log("i am an equals =");
  }
};

button1.addEventListener("click", displayAndStoreNumber);
button2.addEventListener("click", displayAndStoreNumber);
button3.addEventListener("click", displayAndStoreNumber);
button4.addEventListener("click", displayAndStoreNumber);
button5.addEventListener("click", displayAndStoreNumber);
button6.addEventListener("click", displayAndStoreNumber);
button7.addEventListener("click", displayAndStoreNumber);
button8.addEventListener("click", displayAndStoreNumber);
button9.addEventListener("click", displayAndStoreNumber);
button0.addEventListener("click", displayAndStoreNumber);
buttonPlus.addEventListener("click", operationButton);
buttonMinus.addEventListener("click", operationButton);
buttonEuqals.addEventListener("click", operationButton);
buttonClear.addEventListener("click", clearButton);
