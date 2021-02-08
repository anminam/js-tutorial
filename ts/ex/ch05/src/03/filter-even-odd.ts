import { range } from "../range";

const numbers = range(1, 100 + 1);
const evens = numbers.filter((a) => a % 2 === 0);
const odds = numbers.filter((v) => v % 2 === 1);
console.log(evens, odds);
