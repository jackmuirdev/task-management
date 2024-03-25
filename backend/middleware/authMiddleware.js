import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env');

// Load the .env file
dotenv.config({ path: envPath });

// Middleware to protect routes
export const protect = async (req, res, next) => {
  let token;

  // Get the token from the request cookies
  token = req.cookies.jwt;

  if (token) {
    try {
      // Verify the token using the JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user associated with the decoded token's ID
      // and exclude the password field from the returned user object
      req.user = await User.findById(decoded.userId).select('-password');

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error(error);
      // Return an error response if the token verification fails
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    // Return an error response if no token is found in the request
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};


// Middleware to check if user is an admin
export const admin = (req, res, next) => {
  // Check if user is logged in and is an admin
  if (req.user && req.user.isAdmin) {
    // User is logged in and is an admin, proceed to the next middleware or route handler
    next();
  } else {
    // User is not an admin, return an error response
    res.status(403).json({ message: 'Not Authorized as admin' });
  }
};
