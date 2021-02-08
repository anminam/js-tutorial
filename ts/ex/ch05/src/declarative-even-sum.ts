import { filter } from "./filter";
import { fold } from "./fold";
import { range } from "./range";

const numbers = range(1, 100 + 1);
const isEven = (value: number): boolean => value % 2 === 0;
const result = fold(filter(numbers, isEven), (a, b) => a + b, 0);
console.log(result);
