export async function test2() {
  const value = await true;
  console.log(value);
  const value2 = await Promise.resolve(true);
  console.log(value2);
}
