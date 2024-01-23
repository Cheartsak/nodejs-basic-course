import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// user database variable here:
const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users", (req, res) => {
  // let userArray = [];
  // for (let id in userDatabase) {
  //   userArray.push({ id: id, name: userDatabase[id] });
  // }
  const userArray = Object.keys(userDatabase).map((userId) => {
    return { id: userId, name: userDatabase[userId] };
  });
  res.json({ data: userArray });
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).json({ error: { message: "User not found" } });
    return;
  }

  // 1. Implement: returns JSON response
  res.json({ data: { id: userId, name: name } });
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.status(404).json({ error: { message: "User not found" } });
    return;
  }
  if (/[^a-zA-Z]/.test(name)) {
    res
      .status(400)
      .json({ error: { message: "The specified name is invalid" } });
    return;
  }

  userDatabase[userId] = name;

  // 2. Implement: returns JSON response
  res.json({ data: { id: userId, name: name } });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
