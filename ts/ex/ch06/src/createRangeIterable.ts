export const createRangeIterable = (from: number, to: number) => {
  let current = from;
  return {
    next() {
      const value = current < to ? current++ : undefined;
      const done = value === undefined;
      return { value, done };
    },
  };
};
