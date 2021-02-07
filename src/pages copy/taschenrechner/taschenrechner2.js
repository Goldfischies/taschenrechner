import { createElement } from "../../utils/createElement";

let firstNumber = null;
let lastNumber = null;
let resultNumber = null;
let operator = null;

const inputField1 = document.createElement("input");
inputField1.className = "inputfield";
inputField1.placeholder = "0";

const ce = createElement("button", {
  className: "btn_ce",
  innerText: "CE",
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
    alert(inputField1);
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

const plus = createElement("button", {
  className: "btn btn_op",
  innerText: "+",
  onclick: function (event) {
    event.preventDefault();
    operator = "plus";
  },
});

const minus = createElement("button", {
  className: "btn btn_op",
  innerText: "-",
  onclick: function (event) {
    event.preventDefault();
    operator = "minus";
    alert(operator);
  },
});

const divide = createElement("button", {
  className: "btn btn_op",
  innerText: ":",
  onclick: function (event) {
    event.preventDefault();
    operator = "divi";
    alert(operator);
  },
});

const multiply = createElement("button", {
  className: "btn btn_op",
  innerText: "*",
  onclick: function (event) {
    event.preventDefault();
    operator = "mult";
    alert(operator);
  },
});

export function taschenRechner2() {
  return createElement("form", {
    className: "form",
    children: [
      inputField1,
      ce,
      plus,
      minus,
      divide,
      multiply,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      result,
      firstNumber,
      lastNumber,
      resultNumber,
    ],
  });
}
