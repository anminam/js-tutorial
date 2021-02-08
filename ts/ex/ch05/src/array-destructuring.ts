let arrayNumber: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = arrayNumber;

console.log(second, first, rest);
