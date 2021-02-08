export const pureDelete = <T>(
  array: T[],
  callback: (value, index?) => boolean
) => {
  return array.filter((value, index) => callback(value, index) === false);
};

const arrayObj: object[] = [
  [],
  { name: "anminam", age: 23 },
  { name: "k", age: 666 },
];
const newArray = pureDelete(arrayObj, (value, index) => Array.isArray(value));
console.log(arrayObj);
console.log(newArray);
