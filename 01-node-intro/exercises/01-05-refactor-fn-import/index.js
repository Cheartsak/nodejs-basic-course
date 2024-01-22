import { write, read, clear } from "./utils.js";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  // fs.appendFileSync(filePath, input + "\n");
  // console.log("appended:", input);
  write(input);
} else if (option === "r") {
  // const content = fs.readFileSync(filePath, "utf-8");
  // console.log(`file content:\n${content}`);
  read();
} else if (option === "c") {
  // fs.writeFileSync(filePath, "");
  // console.log("the file has been clear");
  clear();
} else {
  console.log("invalid option");
}
