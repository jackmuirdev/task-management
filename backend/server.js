import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';
import { connectDB } from "./database/db.js";

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the path to the .env file
const envPath = path.resolve(__dirname, '../.env');
// Load the .env file
dotenv.config({ path: envPath });

// Get the port from the environment variables or use 10001 as the default port
const port = process.env.PORT || 10001;
// Create an Express application
const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server after successfully connecting to the database
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  // Error handling for database connection
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  });
