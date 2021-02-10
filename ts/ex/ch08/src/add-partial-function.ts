import { FirstOrderFunc } from "./function-signature";
import { add } from "./second-order-func";

const add1: FirstOrderFunc<number, number> = add(1);
console.log(add1(5), add(10)(20));
