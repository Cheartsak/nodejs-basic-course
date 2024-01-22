import fs from "fs";

const fileName="data.txt"
fs.writeFileSync(fileName,"Hello world\n")
fs.appendFileSync(fileName,"Second line")
const content=fs.readFileSync(fileName,"utf-8")
console.log(content);
