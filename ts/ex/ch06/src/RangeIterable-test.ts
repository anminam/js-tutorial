import { RangeIterable } from "./RangeIterable";

const iterator = new RangeIterable(1, 5 + 1);
for (let value of iterator) {
  console.log(value);
}
