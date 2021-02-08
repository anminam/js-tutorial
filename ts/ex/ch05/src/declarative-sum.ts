import { fold } from "./fold";
import { range } from "./range";

const numbers = range(1, 100 + 1);
const foldedNumbers = fold(numbers, (a, b) => a + b, 0);
console.log(foldedNumbers);
