const isAllTrue = (array: boolean[]) => array.every((v) => v === true);

console.log(isAllTrue([true, true, true]), isAllTrue([true, false, true]));
