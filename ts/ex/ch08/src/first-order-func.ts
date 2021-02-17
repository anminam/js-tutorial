import { FirstOrderFunc } from "./function-signature";
const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;

console.log(inc(3));
