Promise.race([Promise.resolve(1), Promise.resolve("asdklfasd")]).then((v) =>
  console.log(v)
);
