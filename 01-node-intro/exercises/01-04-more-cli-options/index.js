import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];
// write
if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);

  //read
} else if (option === "r") {
  console.log("read", filePath);
  console.log(fs.readFileSync(filePath, "utf-8"));

  // clear
} else if (option === "c") {
  console.log("delete content in", filePath);
  fs.writeFileSync(filePath, "");
  // fs.truncateSync(filePath, 0);

  // duplicate
} else if (option === "d") {
  console.log("duplicate content in", filePath);
  const duplicate = fs.readFileSync(filePath, "utf-8");
  fs.appendFileSync(filePath, duplicate);

  // invalid
} else {
  console.log("invalid option");
}
