const express = require("express");
const router = express.Router();

const TodoControllers = require("../controllers/todoControllers");

router.post("/createTodo",TodoControllers.createTodo);
router.put("/updateTodo/:id", TodoControllers.updateTodo);
router.get("/readAllTodo/:id", TodoControllers.readTodo);
router.delete("/deleteTodo/:id", TodoControllers.deleteTodo);

module.exports = router;