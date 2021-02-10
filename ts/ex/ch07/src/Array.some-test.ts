const isAnyTrue = (array: boolean[]) => array.some((v) => v === true);

console.log(isAnyTrue([true, false]), isAnyTrue([false, false]));
