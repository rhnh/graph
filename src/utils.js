import * as canvas from "./constants";

//Horizontal Lines
function hLines({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 1;
  positiveNumbers.map(x => {
    context.save();
    x *= canvas.GRID_GAP;
    drawLine(context, 0, x, canvas.WIDTH + canvas.GRID_GAP, x, "#666");
  });
  context.restore();
  return { context, positiveNumbers };
}

//Vertical Lines
function vLines({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  positiveNumbers.map(x => {
    x *= canvas.GRID_GAP;
    context.save();
    drawLine(context, x, 0, x, canvas.HEIGHT, "#666");
    context.restore();
  });
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

// Vertical lines with gap
function vGapLines({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map(x => {
    x *= canvas.GRID_GAP;
    if (x % 8 === 0) {
      drawLine(
        context,
        canvas.GRID_GAP + x,
        0,
        canvas.GRID_GAP + x,
        canvas.HEIGHT,
        "#666"
      );
    }
  });
  context.restore();
  context.closePath();
  return { context, positiveNumbers };
}

// Vertical lines with gap
function vText({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  const magicNumber = 14; //Moves the ZERO to the center and starts with -7
  positiveNumbers.map((x, i) => {
    x *= canvas.GRID_GAP;
    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.fillText(
        `${(i - magicNumber) / 2}`,
        canvas.GRID_GAP + x,
        canvas.yMid - 5
      );
      context.textAlign = "center";
    }
  });
  context.restore();
  context.closePath();
  return { context, positiveNumbers };
}

// Horizontal gap lines
function hGapLines({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map(x => {
    x *= canvas.GRID_GAP;
    if (x % 8 === 0) {
      context.fillStyle = "red";
      drawLine(
        context,
        0,
        canvas.GRID_GAP + x,
        canvas.WIDTH,
        canvas.GRID_GAP + x,
        "#666"
      );
    }
  });
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

function hText({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  const magicNumber = 14; //Moves the ZERO to the center and starts with -7
  positiveNumbers.map((x, i) => {
    x *= canvas.GRID_GAP;
    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.fillText(
        `${(i - magicNumber) / -2}`,
        canvas.yMid + 5,
        canvas.GRID_GAP + x
      );
      context.textAlign = "center";
    }
  });
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

function xAxes(context) {
  context.save();
  context.lineWidth = 2;
  drawLine(context, canvas.xMid, 0, canvas.xMid, canvas.HEIGHT, "black");
  context.closePath();
  context.restore();
  return context;
}

function yAxes(context) {
  context.save();
  context.lineWidth = 2;
  drawLine(context, 0, canvas.xMid, canvas.HEIGHT, canvas.xMid, "black");
  context.restore();
  return context;
}

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
  return function getPlot(fn, color = "blue") {
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
