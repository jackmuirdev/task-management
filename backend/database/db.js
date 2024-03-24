import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    // Log the error and throw an exception
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Unable to connect to the database');
  }
};