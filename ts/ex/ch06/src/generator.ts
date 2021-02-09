import { join } from "path";

export function* generator() {
  console.log("start");
  let i = 0;
  while (i < 4) yield i++;
  console.log("end");
}
