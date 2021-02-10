export const test1 = async () => {
  let value = await 1;
  console.log(value);
  let value2 = await Promise.resolve(1);
  console.log(value2);
};
