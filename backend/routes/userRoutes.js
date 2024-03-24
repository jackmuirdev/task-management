import express from "express";
const router = express.Router();
import { getUsers, getUserById, registerUser, deleteUser, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userControllers.js";

// GET /users - Get all users
router.get('/', getUsers);

// GET /users/:id - Get a specific user by ID
router.get('/:id', getUserById);

// POST /users - Register a new user
router.post('/', registerUser);

// DELETE /users/:id - Delete a specific user by ID
router.delete('/:id', deleteUser);

// POST /users/login - Login a user
router.post('/login', loginUser);

// POST /users/logout - Logout a user
router.post('/logout', logoutUser);

// GET /profile - Get the user's profile
router.get('/profile', getUserProfile);

// PUT /profile - Update the user's profile
router.put('/profile', updateUserProfile);

export default router;