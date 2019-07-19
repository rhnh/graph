import * as constants from "./constants";
const container = document.createElement("div");
container.setAttribute("id", "container");

const canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas");
canvas.setAttribute("class", "canvas");
canvas.setAttribute("width", constants.WIDTH + "");
canvas.setAttribute("height", constants.WIDTH + "");

document.body.insertAdjacentElement("afterbegin", container);
container.appendChild(canvas);

export const context = canvas.getContext("2d");
