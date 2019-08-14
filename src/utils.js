export const filter = str => {
  var letters = /\b(?:sin|cos|x|!alert|!function|!let)\b|([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g;
  return str.match(letters);
};

export const validate = str => {
  str = str.replace("sin", "Math.sin");
  str = str.replace("cos", "Math.cos");
  str = str.replace("hypot", "Math.hypot");
  return str;
};

export const clean = str => {
  if (!filter(str)) {
    return "";
  } else {
    str = validate(str);
    return new Function("x", "return " + str);
  }
};
