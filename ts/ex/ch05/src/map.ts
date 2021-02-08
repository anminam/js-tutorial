export const map = <T, Q>(
  array: T[],
  callbak: (value: T, index?: number) => Q
) => {
  let result: Q[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = [...result, callbak(value, i)];
  }

  return result;
};
