export const arrayLength = <T>(array: T[]): number => array.length;
export const arrayIsEmpty = <T>(array: T[]): boolean =>
  arrayLength<T>(array) === 0;
console.log(arrayLength(["a", 1]));
