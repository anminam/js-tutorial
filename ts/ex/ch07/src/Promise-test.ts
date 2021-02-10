Promise.resolve(1).then((value) => console.log(value));

Promise.resolve("hello").then((v) => console.log(v));
Promise.resolve([1, 2, 3]).then((v) => console.log(v));
Promise.resolve({ name: "anminam", age: 23 }).then((v) => console.log(v));

Promise.reject(new Error("에러발생")).catch((error: Error) => {
  console.log(error.message);
});

// chain

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
Promise.resolve(1)
  .then((v: number) => {
    console.log(v);
    return Promise.resolve(true);
  })
  .then((v: boolean) => {
    console.log(v);
    return [2, 33];
  })
  .then((v: number[]) => {
    console.log(v);
    return { name: "al", age: 23 };
  })
  .then((v: { name: string; age: number }) => {
    console.log(v);
  });
