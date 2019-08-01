import * as constants from "./constants";
const container = document.createElement("div");
export function canvasManager(canvasID) {
  container.setAttribute("id", "container");

  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", canvasID);
  canvas.setAttribute("class", "canvas");
  canvas.setAttribute("width", constants.WIDTH + "");
  canvas.setAttribute("height", constants.WIDTH + "");

  document.body.insertAdjacentElement("afterbegin", container);
  container.appendChild(canvas);

  const context = canvas.getContext("2d");
  return context;
}

export const btnPlot = createHtmlElement(
  "button",
  "plot-input",
  "plot",
  "plot",
  "Plot"
);

export const inputBox = createHtmlElement(
  "input",
  "plot-input",
  "plot",
  "plot",
  "Plot"
);

const side = document.createElement("div");
side.setAttribute("id", "side");
container.appendChild(side);
side.appendChild(inputBox);
side.appendChild(btnPlot);

export function createHtmlElement(element, id, value, innerHtml) {
  let elm = document.createElement(element);
  elm.setAttribute("id", id);
  elm.setAttribute("value", value);
  elm.innerHTML = innerHtml;
  const con = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "close";

  con.appendChild(elm);
  return elm;
}
