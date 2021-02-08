import { range } from "../range";

const numbers = range(1, 100 + 1);
const result = numbers.reduce((result, value) => result + value, 0);
console.log(result);
const numbers2 = range(1, 10 + 1);
const resultMultiply = numbers2.reduce((result, value) => result * value, 1);
console.log(resultMultiply);
