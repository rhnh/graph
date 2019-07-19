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
// funcs.plot(
//   context,
//   numbers,
//   parabola,
//   constants.xMid,
//   constants.yMid,
//   1,
//   "green"
// );
context.restore();
context.save();
funcs.plot(context, numbers, sin, constants.xMid, constants.yMid, 1, "#e6844f");
context.restore();
funcs.drawXAxes(context);
funcs.drawYAxes(context);

// funcs.labelX(context, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
