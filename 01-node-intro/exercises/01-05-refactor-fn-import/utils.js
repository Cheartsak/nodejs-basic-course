import fs from "fs";

const filePath = "data.txt";

const write = (input) => {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
};
const read = () => {
  const content = fs.readFileSync(filePath, "utf-8");
  console.log(`file content:\n${content}`);
};
const clear = () => {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
};
export { write, read, clear };
