import { fold } from "./fold";
import { map } from "./map";
import { range } from "./range";

const numbers = range(1, 100 + 1);
const squares = map(numbers, (a) => a * a);
const result = fold(squares, (a, b) => a + b, 0);
console.log(result);
