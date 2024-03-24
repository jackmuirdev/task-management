import Task from '../models/taskModels.js'

// @desc      Get all tasks
// @route     GET /api/tasks
// @access    Private
export const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
}

// @desc      Get tasks by Id
// @route     GET /api/tasks/:id
// @access    Private
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
}

// @desc      Create a new task
// @route     POST /api/tasks
// @access    Private
export const createTask = async (req, res) => {
  const { name, description } = req.body;

  const task = await Task.create({
    name,
    description,
    status: 'to do'
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
}

// @desc      Update a task
// @route     PUT /api/tasks/:id
// @access    Private
export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    task.name = req.body.name || task.name;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
}

// @desc      Delete a task
// @route     DELETE /api/tasks/:id
// @access    Private
export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await task.remove();
    res.status(200).json({ message: 'Task removed' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
}
