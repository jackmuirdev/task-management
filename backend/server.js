import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the path to the .env file
const envPath = path.resolve(__dirname, '../.env');
// Load the .env file
dotenv.config({ path: envPath });

const port = process.env.PORT || 10001;
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
