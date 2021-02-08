import { arrayIsEmpty, arrayLength } from "./arrayLength";

let numArray2: number[] = [1, 2, 3];
let strArray2: string[] = ["asdk", "bbb"];

type IPerson2 = { name: string; age?: number };
let personArray2: IPerson2[] = [{ name: "anminam" }, { name: "an", age: 23 }];

console.log(
  arrayLength(numArray2),
  arrayLength(strArray2),
  arrayLength(personArray2),
  arrayIsEmpty([]),
  arrayIsEmpty(strArray2),
  arrayIsEmpty(personArray2)
);
