import { context } from "./display";
import * as funcs from "./utils";
import { numbers, positiveNumbers } from "./constants";
import * as constants from "./constants";
import "./style.css";

import { parabola, sin } from "./func";

funcs.drawHorizontalLine(context, positiveNumbers);
funcs.drawVerticalLine(context, positiveNumbers);
funcs.vLineMakers(context, positiveNumbers);
funcs.hLineMakers(context, positiveNumbers);
context.save();

funcs.plot(
  context,
  numbers,
  parabola,
  constants.xMid,
  constants.yMid,
  constants.GAP,
  "green"
);
funcs.plot(
  context,
  numbers,
  sin,
  constants.xMid,
  constants.yMid,
  constants.GAP,
  "red"
);
funcs.plot(
  context,
  numbers,
  Math.cos,
  constants.xMid,
  constants.yMid,
  constants.GAP,
  "blue"
);
const f = x => 2 * x * x * x + 3 * x + 3;
funcs.plot(
  context,
  numbers,
  f,
  constants.xMid,
  constants.yMid,
  constants.GAP,
  "blue"
);
// funcs.labelX(context, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
funcs.drawXAxes(context);
funcs.drawYAxes(context);
