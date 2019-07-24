import * as constants from "./constants";
export function canvasManager(canvasID) {
  const container = document.createElement("div");
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
