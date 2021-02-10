import { readFile, readFileSync } from "fs";

console.log("read pakage.json using synchronous api...");

const filePath = "../package.json";
const buffer: Buffer = readFileSync(filePath);
console.log(buffer.toString());

readFile(filePath, (error: Error | null, buffer: Buffer) => {
  console.log("read pakage.json use asynchronous api...");
  console.log(buffer.toString());
});

const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (err: Error | null, data: Buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });

async () => {
  const content = await readFilePromise(filePath);
  console.log("read package.json using Promise and async/await...");
  console.log(content);
};
