import process from "process";
import fs from "fs";
const argument = process.argv;
fs.writeFileSync("data.txt", `${argument[2]}\n`);
fs.appendFileSync("data.txt", argument.slice(3).join(" "));
