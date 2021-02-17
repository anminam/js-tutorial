import {
  FirstOrderFunc,
  SecondOrderFunc,
  ThirdOrderFucn,
} from "./function-signature";

const add: SecondOrderFunc<number, number> = (
  x: number
): FirstOrderFunc<number, number> => (y: number) => x + y;

const add3: ThirdOrderFucn<number, number> = (
  x: number
): SecondOrderFunc<number, number> => (
  y: number
): FirstOrderFunc<number, number> => (z: number): number => x + y + z;

console.log(add3(1)(3)(4));
