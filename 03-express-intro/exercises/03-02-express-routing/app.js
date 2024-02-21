import express from "express";
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const { id } = req.query;
  res.send(`User ID: ${id}`);
});

app.post("/users", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const { id } = req.query;
  const { name } = req.body;
  res.send(`User ID: ${id}, name has been updated to ${name}`);
});

app.get("/users/:userId(\\d+)", (req, res) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const { userId } = req.params;
  res.send(`User ID: ${userId}`);
});

app.post("/users/:userId(\\d+)", (req, res) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const { userId } = req.params;
  const { name } = req.body;
  res.send(`User ID: ${userId}, name has been updated to ${name}`);
  console.log(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
