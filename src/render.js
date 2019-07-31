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

export const btnPlot = document.createElement("button");
btnPlot.setAttribute("id", "plot-button");
btnPlot.setAttribute("value", "plot");
btnPlot.setAttribute("name", "plot");
btnPlot.innerHTML = "Plot";
export const inputBox = document.createElement("input");
inputBox.setAttribute("id", "plot-button");
inputBox.setAttribute("value", "plot");
inputBox.setAttribute("name", "plot");
inputBox.innerHTML = "Plot";
inputBox.onfocus = function() {
  this.value = "";
};
const side = document.createElement("div");
side.setAttribute("id", "side");
container.appendChild(side);
side.appendChild(inputBox);
side.appendChild(btnPlot);
