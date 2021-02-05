import { createElement } from "../../utils/createElement";

function createInputfield() {
  return createElement("input", {
    className: "inputfield",
    // type: "number",
    placeholder: "0",
    max: 99999999,
    id: "inp",
  });
}

function createOldnumberfield() {
  return createElement("input", {
    className: "inputfield",
    id: "oldnumb",
  });
}

function createNewnumberfield() {
  return createElement("input", {
    className: "inputfield",
    id: "newnumb",
  });
}

function createPlus() {
  return createElement("button", {
    className: "btn",
    innerText: "+",
    id: "plus",
    onclick: "getInputValue(); ",
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
      inputField.value += 1;
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

let inputField = createInputfield();
let oldnumberField = createOldnumberfield();
let newnumberField = createNewnumberfield();

export function taschenRechner() {
  const plus = createPlus();
  const minus = createMinus();
  const divide = createDivide();
  const multiply = createMultiply();
  const one = createOne();
  const two = createTwo();
  const equals = createEquals();
  function getInputValue() {
    let inputval = document.getElementById("oldnumb").value;
    alert(inputval);
  }

  return createElement("form", {
    className: "form",
    children: [
      inputField,
      oldnumberField,
      newnumberField,
      one,
      two,
      plus,
      minus,
      divide,
      multiply,
      equals,
    ],
  });
}
