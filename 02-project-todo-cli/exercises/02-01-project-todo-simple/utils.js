import fs from "fs";
import clc from "cli-color";
const filePath = "data.txt";

const header = () => console.log(clc.blue.bgWhite("== Todo App =="));

const write = (input) => {
  fs.appendFileSync(filePath, input + "\n");
  header();
  console.log(`Todo "${input}" was added.`);
};

const read = () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const items = content.trim().split("\n");
  let amount = items.length;
  if (content === "") {
    amount = 0;
  }
  const itemsNumber = items
    .reverse()
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n");

  header();
  console.log(`Total todos: ${amount} items.\n`);
  if (content !== "") {
    console.log(itemsNumber);
  }
};

const clear = () => {
  fs.writeFileSync(filePath, "");
  header();
  console.log("All todos are cleared");
};
export { write, read, clear };
