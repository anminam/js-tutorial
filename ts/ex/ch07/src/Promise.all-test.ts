const getAllResolveResult = <T>(promises: Promise<T>[]) =>
  Promise.all(promises);

getAllResolveResult<any>([
  Promise.resolve(true),
  Promise.resolve("hello"),
]).then((v) => console.log(v));

getAllResolveResult<any>([
  Promise.resolve("이거되야함"),
  Promise.reject(new Error("해햏")),
])
  .then((v) => {
    console.log(v);
  })
  .catch((error: Error) => console.log(error.message));
