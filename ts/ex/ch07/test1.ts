import { rejects } from "assert";
import { readFile } from "fs";

const readFilePromise = (filename: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(filename, (err: Error | null, data: Buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });

(async () => {
  const a = await readFilePromise("../package.json");
  console.log(a);
})();
