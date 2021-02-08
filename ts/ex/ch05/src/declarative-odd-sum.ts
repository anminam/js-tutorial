import { filter } from "./filter";
import { fold } from "./fold";
import { range } from "./range";

const values = range(1, 100 + 1);
const isOdd = (n: number): boolean => n % 2 !== 1;
const result = fold(filter(values, isOdd), (a, b) => a + b, 0);
console.log(result);
