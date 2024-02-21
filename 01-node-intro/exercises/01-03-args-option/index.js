import fs from "fs";

const filePath = "data.txt";
const option = process.argv[2];
const input = process.argv[3];
if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log(input, "was written in", filePath);
} else {
  console.log("invalid option");
}

// console.log(process.argv);
