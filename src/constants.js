export const WIDTH = 600;
export const HEIGHT = 600;
export const GAP = 9;
export const xMid = WIDTH / 2;
export const yMid = HEIGHT / 2;

export const positiveNumbers = Array.from(Array(WIDTH).keys()).map(x => x);
const negativeNumbers = positiveNumbers.map(x => x - WIDTH);

export const numbers = negativeNumbers.concat(positiveNumbers);
