import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./actions";

const todoRoutes: Router = Router();

todoRoutes.get("/todos", getTodos);

todoRoutes.post("/add-todo", addTodo);

todoRoutes.put("/edit-todo/:id", updateTodo);

todoRoutes.delete("/delete-todo/:id", deleteTodo);

export default todoRoutes;
