import { pipe } from "./pipe";
import { squaredMap } from "./squaredMap";

const a = pipe(squaredMap);
const b = a([1, 2]);
console.log(b);
