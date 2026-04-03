import Todo from "../models/Todo.js";

// @desc Get all todos
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

// @desc Create todo
export const createTodo = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Please add a title" });
  }

  const todo = await Todo.create({
    title: req.body.title,
    status: "pending",
  });

  res.status(201).json(todo);
};

// @desc Update todo
export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTodo);
};

// @desc Delete todo
export const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  await todo.deleteOne();

  res.status(200).json({ id: req.params.id });
};