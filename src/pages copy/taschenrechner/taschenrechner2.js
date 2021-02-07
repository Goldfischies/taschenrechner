import { createElement } from "../../utils/createElement";

let firstNumber = null;
let lastNumber = null;
let resultNumber = null;
let operator = null;

function calculate() {
  switch (operator) {
    case "plus":
      resultNumber = firstNumber + lastNumber;
      break;
    case "minus":
      resultNumber = firstNumber - lastNumber;
      break;
    case "mult":
      resultNumber = firstNumber * lastNumber;
      break;
    case "divi":
      resultNumber = firstNumber / lastNumber;
      break;
  }
}

function createNumberButton(number) {
  return createElement("button", {
    className: "btn",
    innerText: number,
    onclick: function (event) {
      event.preventDefault();
      inputField1.value += number;
    },
  });
}

const inputField1 = document.createElement("input");
inputField1.className = "inputfield";
inputField1.placeholder = "0";

const ce = createElement("button", {
  className: "btn btn_ce",
  innerText: "C",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value = null;
  },
});

const result = createElement("button", {
  className: "btn",
  innerText: "=",
  onclick: function (event) {
    event.preventDefault();
    lastNumber = parseInt(inputField1.value);
    calculate();
    inputField1.value = resultNumber;
  },
});

const plus = createElement("button", {
  className: "btn btn_op",
  innerText: "+",
  onclick: function (event) {
    event.preventDefault();
    operator = "plus";
    firstNumber = parseInt(inputField1.value);
    inputField1.value = null;
  },
});

const minus = createElement("button", {
  className: "btn btn_op",
  innerText: "-",
  onclick: function (event) {
    event.preventDefault();
    operator = "minus";
    firstNumber = parseInt(inputField1.value);
    inputField1.value = null;
  },
});

const divide = createElement("button", {
  className: "btn btn_op",
  innerText: ":",
  onclick: function (event) {
    event.preventDefault();
    operator = "divi";
    firstNumber = parseInt(inputField1.value);
    inputField1.value = null;
  },
});

const multiply = createElement("button", {
  className: "btn btn_op",
  innerText: "*",
  onclick: function (event) {
    event.preventDefault();
    operator = "mult";
    firstNumber = parseInt(inputField1.value);
    inputField1.value = null;
  },
});

export function taschenRechner2() {
  return createElement("form", {
    className: "form",
    children: [
      inputField1,
      createNumberButton(7),
      createNumberButton(8),
      createNumberButton(9),
      plus,
      createNumberButton(4),
      createNumberButton(5),
      createNumberButton(6),
      minus,
      createNumberButton(1),
      createNumberButton(2),
      createNumberButton(3),
      multiply,
      createNumberButton(0),
      result,
      ce,
      divide,
    ],
  });
}
