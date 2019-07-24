import { canvasManager } from "./canvas_manager";
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

plot(parabola);

plot(sin, "green");
plot(cos, "red");
plot(hypot, "orange");
