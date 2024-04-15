import dotenv from 'dotenv';
import colors from 'colors';
import { users } from "./data/users.js";
import { tasks } from "./data/tasks.js";
import User from './models/userModels.js';
import Task from './models/taskModels.js';
import { connectDB } from './database/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany(); 

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Now, let's insert tasks
    await Task.insertMany(tasks); 

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const command = process.argv[2];

if (command === 'destroy') {
  destroyData();
} else if (command === 'import') {
  importData();
} else {
  console.log('Invalid command. Use "import" to import data or "destroy" to destroy data.');
  process.exit(1);
}
