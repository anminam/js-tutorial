const multiply = (result, val) => result * val;
const add = (result, val) => result + val;
const numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers3
  .filter((v) => v * 2 !== 0)
  .map((v) => v * v)
  .reduce(multiply, 1);

let result = Math.round(Math.sqrt(tempResult));

console.log(result);
