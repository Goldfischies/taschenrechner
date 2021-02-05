import { createElement } from "../../utils/createElement";

let resultNumber = null;
let operator = null;

function createInputfield() {
  return createElement("input", {
    className: "inputfield",
    // type: "number",
    placeholder: "0",
    max: 99999999,
    id: "inp",
  });
}

let oldnumber = null;
let newnumber = null;

// function createNewnumberfield() {
//   return createElement("input", {
//     className: "inputfield",
//     id: "newnumb",
//   });
// }

// const plus = document.createElement("button");
// plus.innerText = "+";
// plus.className = "btn";
// plus.onclick((operator = "plus"));

function calculate(operator) {
  switch (operator) {
    case "plus":
      resultNumber = oldnumber + newnumber;
      break;
  }
}

function createPlus() {
  return createElement("button", {
    className: "btn",
    innerText: "+",
    id: "plus",
    onclick: function (event) {
      event.preventDefault();
      operator = "plus";
      oldnumber = inputField.value;
      inputField = null;
    },
  });
}

function createMinus() {
  return createElement("button", {
    className: "btn",
    innerText: "-",
  });
}

function createDivide() {
  return createElement("button", {
    className: "btn",
    innerText: ":",
  });
}

function createMultiply() {
  return createElement("button", {
    className: "btn",
    innerText: "*",
  });
}

function createEquals() {
  return createElement("button", {
    className: "btn",
    innerText: "=",
    onclick: function (event) {
      event.preventDefault();
      calculate(operator);
    },
  });
}

function createOne() {
  return createElement("button", {
    className: "btn",
    innerText: "1",
    onclick: function (event) {
      event.preventDefault();
      inputField.value += 1;
    },
  });
}

function createTwo() {
  return createElement("button", {
    className: "btn",
    innerText: "2",
    onclick: function (event) {
      event.preventDefault();
      inputField.value += 2;
    },
  });
}

function createThree() {
  return createElement("button", {
    className: "btn",
    innerText: "3",
    onclick: function (event) {
      event.preventDefault();
      inputField.value += 3;
    },
  });
}

console.log(inputField);

function createFour() {
  return createElement("button", {
    className: "btn",
    innerText: "4",
    onclick: function (event) {
      event.preventDefault();
      inputField.value += 4;
    },
  });
}

let inputField = createInputfield();

oldnumber = inputField.value;

console.log(inputField);

// let newnumberField = createNewnumberfield();

export function taschenRechner() {
  const plus = createPlus();
  const minus = createMinus();
  const divide = createDivide();
  const multiply = createMultiply();
  const one = createOne();
  const two = createTwo();
  const three = createThree();
  const four = createFour();
  const equals = createEquals();

  return createElement("form", {
    className: "form",
    children: [
      inputField,
      oldnumber,
      newnumber,
      one,
      two,
      three,
      four,
      plus,
      minus,
      divide,
      multiply,
      equals,
      resultNumber,
    ],

    onsubmit: function (event) {
      event.preventDefault();
      if (inputField.value != 0) {
        oldnumber = inputField.value;
        console.log(oldnumber);
      }
      // alert("Stop");
    },
  });
}
