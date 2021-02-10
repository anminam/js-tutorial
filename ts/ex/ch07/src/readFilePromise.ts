import { readFile } from "fs";

export const readFilePromise = (filename: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(filename, (err: Error | null, data: Buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
