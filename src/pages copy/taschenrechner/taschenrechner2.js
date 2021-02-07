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

const inputField1 = document.createElement("input");
inputField1.className = "inputfield";
inputField1.placeholder = "0";

const ce = createElement("button", {
  className: "btn_ce",
  innerText: "C",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value = null;
  },
});

const one = createElement("button", {
  className: "btn",
  innerText: "1",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 1;
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

const two = createElement("button", {
  className: "btn",
  innerText: "2",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 2;
  },
});

const three = createElement("button", {
  className: "btn",
  innerText: "3",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 3;
  },
});

const four = createElement("button", {
  className: "btn",
  innerText: "4",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 4;
  },
});

const five = createElement("button", {
  className: "btn",
  innerText: "5",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 5;
  },
});

const six = createElement("button", {
  className: "btn",
  innerText: "6",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 6;
  },
});

const seven = createElement("button", {
  className: "btn",
  innerText: "7",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 7;
  },
});

const eight = createElement("button", {
  className: "btn",
  innerText: "8",

  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 8;
  },
});

const nine = createElement("button", {
  className: "btn",
  innerText: "9",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 9;
  },
});

const zero = createElement("button", {
  className: "btn",
  innerText: "0",
  onclick: function (event) {
    event.preventDefault();
    inputField1.value += 0;
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
      seven,
      eight,
      nine,
      plus,
      four,
      five,
      six,
      minus,
      one,
      two,
      three,
      multiply,
      zero,
      result,
      ce,
      divide,
    ],
  });
}
