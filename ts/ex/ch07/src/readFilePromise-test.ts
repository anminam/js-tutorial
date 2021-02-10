import { readFilePromise } from "./readFilePromise";

readFilePromise("../package.json")
  .then((content) => {
    console.log(content);
    return readFilePromise("../tsconfig.json");
  })
  .then((content) => {
    console.log(content);
    return readFilePromise(".");
  })
  .catch((error: Error) => {
    console.log("EEEE", error.message);
  })
  .finally(() => {
    console.log("퐈이널리");
  });
