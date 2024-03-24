import express from "express";
const router = express.Router();
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from "../controllers/taskControllers.js";

// GET /tasks - Get all tasks
router.get('/', getTasks);

// GET /tasks/:id - Get a specific task by ID
router.get('/:id', getTaskById);

// POST /tasks - Create a new task
router.post('/', createTask);

// PUT /tasks/:id - Update a specific task by ID
router.put('/:id', updateTask);

// DELETE /tasks/:id - Delete a specific task by ID
router.delete('/:id', deleteTask);

export default router;