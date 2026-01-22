const express = require("express")
const app = express()

app.use(express.json())

let todos = []
let id = 1

app.get("/todos", (req, res) => {
  res.json(todos)
})

app.post("/todos", (req, res) => {
  const task = {
    id: id++,
    title: req.body.title,
    completed: false
  }
  todos.push(task)
  res.json(task)
})

app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id)

  if (!todo) {
    return res.json({ message: "Task not found" })
  }

  todo.title = req.body.title
  todo.completed = req.body.completed
  res.json(todo)
})

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id != req.params.id)
  res.json({ message: "Task deleted" })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
