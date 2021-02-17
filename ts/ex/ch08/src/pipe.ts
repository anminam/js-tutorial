export const pipe = <T>(...functions: readonly Function[]) => (x: T) => {
  const deep = [...functions];
  return deep.reduce((value, func) => func(value), x);
};

const inc = (x) => x + 1;
const pipeMan = pipe(inc, inc);
const a = pipeMan(5);
console.log(a);
