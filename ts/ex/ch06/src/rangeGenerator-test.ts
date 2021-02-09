import { rangeGanerator } from "./rangeGenerator";

let iterator = rangeGanerator(1, 5 + 1);

while (true) {
  const { value, done } = iterator.next();
  if (done) {
    break;
  }
  console.log(value);
}
console.log("------------j---");
for (let value of rangeGanerator(1, 5 + 1)) {
  console.log(value);
}
