export const pipe = (...functions) => (x) =>
  functions.reduce((value, func) => func(value), x);
