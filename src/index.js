import { context } from "./display";
import * as funcs from "./utils";
import { numbers, positiveNumbers } from "./constants";
import * as constants from "./constants";
import "./style.css";

import { parabola, sin } from "./func";

funcs.grid({ context, positiveNumbers });
funcs.scale({ context, positiveNumbers });
funcs.axis(context);

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

const f = x => 2 * x * x * x - 0.9 * x;

funcs.plot(
  context,
  numbers,
  f,
  constants.xMid,
  constants.yMid,
  constants.GAP,
  "grey"
);
// funcs.labelX(context, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
