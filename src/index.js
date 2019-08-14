import { canvasManager, inputBox, btnPlot } from "./render";
import * as graph from "./graph";
import * as utils from "./utils";
import { numbers, positiveNumbers } from "./constants";
import * as constants from "./constants";
import "./style.css";

let context = canvasManager("canvas");

graph.grid({ context, positiveNumbers });
graph.scale({ context, positiveNumbers });
graph.text({ context, positiveNumbers });
graph.axis(context);

let plot = graph.plot(
  context,
  numbers,
  constants.xMid,
  constants.yMid,
  constants.GAP
);

btnPlot.addEventListener("click", () => {
  let str = inputBox.value.toString();
  let f = utils.clean(str);
  plot(f);
});
inputBox.onfocus = function() {
  this.value = "";
};
// plot(parabola);

// plot(sin, "green");
// // plot(cos, "red");
// // plot(hypot, "orange");
