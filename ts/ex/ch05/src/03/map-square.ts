import { range } from "../range";
let squres: number[] = range(1, 5 + 1).map((v) => v * v);
console.log(squres);

let squresStr: string[] = range(1, 5 + 1).map((v, i) => `[${i}]:${v}`);
console.log(squresStr);
