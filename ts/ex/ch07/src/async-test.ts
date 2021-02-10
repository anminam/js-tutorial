const asyncReturn = async () => {
  throw new Error("에러다");
};

asyncReturn()
  .then((value) => {
    console.log(value);
  })
  .catch((error: Error) => console.log(error.message));
