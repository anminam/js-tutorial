import { generator } from "./generator";

// for (let value of generator()) {
//   console.log(value);
// }

const gener = generator();
console.log(gener.next());
console.log(gener.next());
console.log(gener.next());
console.log(gener.next());
