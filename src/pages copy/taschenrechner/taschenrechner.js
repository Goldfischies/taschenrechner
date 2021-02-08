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
    onclick: function () {
      inputField1.value += number;
    },
  });
}

const inputField1 = document.createElement("input");
inputField1.className = "inputfield";
inputField1.placeholder = "0";

const clear = createElement("button", {
  className: "btn btn_clear",
  innerText: "C",
  onclick: function () {
    inputField1.value = null;
  },
});

const ce = createElement("button", {
  className: "btn btn_ce",
  innerText: "CE",
  onclick: function () {
    console.log(typeof inputField1.value);
    inputField1.value = inputField1.value.slice(0, -1);
  },
});

const result = createElement("button", {
  className: "btn",
  innerText: "=",
  onclick: function () {
    lastNumber = parseFloat(inputField1.value);
    calculate();
    inputField1.value = resultNumber;
  },
});

const plus = createElement("button", {
  className: "btn btn_op",
  innerText: "+",
  onclick: function () {
    operator = "plus";
    firstNumber = parseFloat(inputField1.value);
    inputField1.value = null;
  },
});

const minus = createElement("button", {
  className: "btn btn_op",
  innerText: "-",
  onclick: function () {
    operator = "minus";
    firstNumber = parseFloat(inputField1.value);
    inputField1.value = null;
  },
});

const divide = createElement("button", {
  className: "btn btn_op",
  innerText: ":",
  onclick: function () {
    operator = "divi";
    firstNumber = Number(inputField1.value);
    inputField1.value = null;
  },
});

const multiply = createElement("button", {
  className: "btn btn_op",
  innerText: "*",
  onclick: function () {
    operator = "mult";
    firstNumber = Number(inputField1.value);
    inputField1.value = null;
  },
});

export function taschenRechner() {
  return createElement("div", {
    className: "form",
    children: [
      inputField1,
      clear,
      ce,
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
      createNumberButton("."),
      result,
      divide,
    ],
  });
}
