import express from "express";
import { findTodo, listTodos } from "./models/todo.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/todos", (req, res) => {
  const todos = listTodos();

  // 1. Implement: returns a list of todos
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  // 2. Implement: returns a single todo
  res.json({ data: todo });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
