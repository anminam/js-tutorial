import { mergeArray } from "./mergeArray";

const mergedArray1: string[] = mergeArray(["hello"], ["world"]);
console.log(mergedArray1);

const mergedArray2: number[] = mergeArray([1], [2, 3], [4, 5, 6]);
console.log(mergedArray2);
