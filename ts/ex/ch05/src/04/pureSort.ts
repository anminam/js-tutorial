export const pureSort = <T>(array: readonly T[]): T[] => {
  const newArray = [...array];
  return newArray.sort();
};
