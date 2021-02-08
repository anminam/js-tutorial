export const fold = <T>(
  array: T[],
  callback: (result: T, value: T) => T,
  initValue: T
): T => {
  let result: T = initValue;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = callback(result, value);
  }

  return result;
};
