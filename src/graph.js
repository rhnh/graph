import * as settings from "./constants";

/**
 * runs the callback against context and with positive number boundaries
 * @param {HTMLCanvasElement} context - Takes a context
 * @param {number} positiveNumbers - An Array of numbers
 * @param {Function} fn - the fn Callback which draws on canvas
 * @returns{Object} an object, containing context and number for chaining
 */
function draw(context, positiveNumbers, fn) {
  context.save();
  context.beginPath();
  fn(context, positiveNumbers);
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

/**
 * passes context and array of positive numbers to draw() for drawing horizontal lines
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const hLines = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    positiveNumbers.map(x => {
      x *= settings.GRID_GAP;
      drawLine(context, 0, x, settings.WIDTH + settings.GRID_GAP, x, "#999");
    });
  });

/**
 * passes context and array of positive numbers to draw() for drawing Vertical Lines
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const vLines = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    positiveNumbers.map(x => {
      x *= settings.GRID_GAP;
      drawLine(context, x, 0, x, settings.HEIGHT, "#999");
    });
  });

/**
 * passes context and array of positive numbers to draw() for drawing Vertical dashed gap Lines
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const vGapLines = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    context.lineWidth = 2;
    context.setLineDash([5, 1]);
    positiveNumbers.map(x => {
      x *= settings.GRID_GAP;
      if (x % 8 === 0) {
        drawLine(
          context,
          settings.GRID_GAP + x,
          0,
          settings.GRID_GAP + x,
          settings.HEIGHT,
          "#666"
        );
      }
    });
  });

/**
 * passes context and array of positive numbers to draw() for drawing Horizontal dashed gap Lines
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const hGapLines = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    context.lineWidth = 2;
    context.setLineDash([5, 1]);
    positiveNumbers.map(x => {
      x *= settings.GRID_GAP;
      if (x % 8 === 0) {
        context.fillStyle = "red";
        drawLine(
          context,
          0,
          settings.GRID_GAP + x,
          settings.WIDTH,
          settings.GRID_GAP + x,
          "#666"
        );
      }
    });
  });

/**
 * passes context and array of positive numbers to draw() for writing text horizontally
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const hText = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    const magicNumber = 14; // number that shift zero to the center
    positiveNumbers.map((x, i) => {
      x *= settings.GRID_GAP;
      if (x % 8 === 0) {
        context.fillStyle = "red";
        context.font = "15px Arial";
        context.fillText(
          `${(i - magicNumber) / 2}`,
          settings.GRID_GAP + x,
          settings.yMid - 5
        );
        context.textAlign = "center";
      }
    });
  });

/**
 * passes context and array of positive numbers to draw() for writing text vertically
 * @param {Object} Object - Takes an number containing context and number passes to draw()
 * @returns{Object} an object, containing context and number for chaining
 */
const vText = ({ context, positiveNumbers }) =>
  draw(context, positiveNumbers, (context, positiveNumbers) => {
    const magicNumber = 14; // number that shift zero to the center

    positiveNumbers.map((x, i) => {
      x *= settings.GRID_GAP;
      if (x % 8 === 0) {
        context.fillStyle = "red";
        context.font = "15px Arial";

        context.fillText(
          `${(i - magicNumber) / -2}`,
          settings.yMid + 5,
          settings.GRID_GAP + x
        );
        context.textAlign = "center";
      }
    });
  });

function drawAxes(context) {
  return function axes(fn) {
    context.save();
    context.lineWidth = 2;
    fn(context);
    context.closePath();
    context.restore();
    return context;
  };
}

const xAxes = context =>
  drawAxes(context)(() =>
    drawLine(
      context,
      settings.xMid,
      0,
      settings.xMid,
      settings.HEIGHT,
      "#0008ff"
    )
  );
const getColor = () =>
  "#" +
  Math.random()
    .toString(16)
    .slice(-6);

const yAxes = context =>
  drawAxes(context)(() =>
    drawLine(
      context,
      0,
      settings.xMid,
      settings.HEIGHT,
      settings.xMid,
      "#0008ff"
    )
  );

function drawLine(context, x0, y0, xn, yn, color) {
  context.save();
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x0, y0);
  context.lineTo(xn, yn);
  context.stroke();
  context.closePath();
  context.restore();
}

function compose(a, b) {
  return function(c) {
    return a(b(c));
  };
}

export const grid = compose(
  hLines,
  vLines
);

export const scale = compose(
  hGapLines,
  vGapLines
);
export const text = compose(
  hText,
  vText
);

export const axis = compose(
  yAxes,
  xAxes
);

export function plot(context, points, tx, ty, gap) {
  return function getPlot(fn, color = getColor()) {
    context.save();
    context.beginPath();
    context.translate(tx, ty);
    context.moveTo(points[0], fn(points[0]));
    points.map(x => {
      context.lineTo(x, -gap * fn(x / gap));
    });
    context.lineWidth = 2;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    context.restore();
  };
}
