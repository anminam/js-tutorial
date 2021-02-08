export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    result = [...result, ...arrays[i]];
  }

  return result;
};
