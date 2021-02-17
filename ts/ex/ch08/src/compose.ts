import { f, g, h } from "./f-g-h";

export const compose = <T, R>(...functions: readonly Function[]): Function => (
  x: T
): T => (R) => {
  const array: Function[] = [...functions];
  return array.reverse().reduce((value, func) => func(value), x);
};

const composeFGH = compose(h, g, f);
console.log(composeFGH("askdfsadklfjasd"));

const inc = (x) => x + 1;
const composed = compose(inc, inc, inc, inc);
console.log(composed(5));
