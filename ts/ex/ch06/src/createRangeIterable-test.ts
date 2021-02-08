import { createRangeIterable } from "./createRangeIterable";

const iterable = createRangeIterable(1, 10 + 1);

while (true) {
  const { value, done } = iterable.next();

  if (done) break;
  console.log(value);
}
