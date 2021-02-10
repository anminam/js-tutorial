import { readFilePromise } from "./readFilePromise";

const readFileAll = async (filenames: string[]) => {
  return await Promise.all(filenames.map((value) => readFilePromise(value)));
};

readFileAll(["../tsconfig.json", "../.json"])
  .then(([a, b]: string[]) => {
    console.log(a);
    console.log(b);
  })
  .catch((err) => {
    console.log(err);
  });
