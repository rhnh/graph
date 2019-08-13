import { canvasManager, inputBox, btnPlot } from "./render";
import * as utils from "./utils";
import { numbers, positiveNumbers } from "./constants";
import * as constants from "./constants";
import { parabola, sin, cos, hypot } from "./func";

import "./style.css";

let context = canvasManager("canvas");

utils.grid({ context, positiveNumbers });
utils.scale({ context, positiveNumbers });
utils.text({ context, positiveNumbers });
utils.axis(context);

let plot = utils.plot(
  context,
  numbers,
  constants.xMid,
  constants.yMid,
  constants.GAP
);

btnPlot.addEventListener("click", () => {
  let t = inputBox.value.toString();
  if (!utils.filter(t)) {
    // console.info("failed");
  } else {
    // console.info("passed");
    t = t.replace("sin", "Math.sin");
    t = t.replace("cos", "Math.cos");
    t = t.replace("hypot", "Math.hypot");
    let f = new Function("x", "return " + t);
    plot(f);
  }
});
inputBox.onfocus = function() {
  this.value = "";
};
// plot(parabola);

// plot(sin, "green");
// // plot(cos, "red");
// // plot(hypot, "orange");
