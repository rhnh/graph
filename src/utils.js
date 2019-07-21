function drawHorizontalLine({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 1;
  positiveNumbers.map(x => {
    context.save();
    x *= 20;
    drawLine(context, 0, x, context.canvas.width + 20, x, "#666");
  });
  context.restore();
  return { context, positiveNumbers };
}

function drawVerticalLine({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  positiveNumbers.map(x => {
    x *= 20;
    context.save();
    drawLine(context, x, 0, x, context.canvas.height, "#666");
    context.restore();
  });
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

function vLineMakers({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map((x, i) => {
    x *= 20;
    if (x % 8 === 0) {
      context.fillStyle = "red";
      drawLine(context, 20 + x, 0, 20 + x, context.canvas.height, "#666");
      context.fillText(
        `${(i - 14) / 2}`,
        20 + x,
        context.canvas.height / 2 - 5
      );
      context.textAlign = "center";
    }
    context.width;
  });
  context.restore();
  context.closePath();
  return { context, positiveNumbers };
}

function hLineMakers({ context, positiveNumbers }) {
  context.save();
  context.beginPath();
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map((x, i) => {
    x *= 20;
    if (x % 8 === 0) {
      context.fillStyle = "red";
      drawLine(context, 0, 20 + x, context.canvas.width, 20 + x, "#666");
      context.fillText(
        `${(i - 14) / -2}`,
        context.canvas.height / 2 + 5,
        20 + x
      );
      context.textAlign = "center";
    }
    context.width;
  });
  context.closePath();
  context.restore();
  return { context, positiveNumbers };
}

function drawXAxes(context) {
  context.save();
  context.lineWidth = 2;
  drawLine(
    context,
    context.canvas.width / 2,
    0,
    context.canvas.width / 2,
    context.canvas.height,
    "black"
  );
  context.closePath();
  context.restore();
  return context;
}

function drawYAxes(context) {
  context.save();
  context.lineWidth = 2;
  drawLine(
    context,
    0,
    context.canvas.width / 2,
    context.canvas.height,
    context.canvas.width / 2,
    "black"
  );
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
  drawHorizontalLine,
  drawVerticalLine
);

export const scale = compose(
  hLineMakers,
  vLineMakers
);

export const axis = compose(
  drawYAxes,
  drawXAxes
);

export function plot(context, points, fn, tx, ty, gap, color) {
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
}
