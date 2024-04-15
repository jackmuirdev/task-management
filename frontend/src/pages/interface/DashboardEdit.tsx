import { useState } from 'react';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function DashboardScreen() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleAddTask = (task) => {
    // Determine which column to add the task to based on its status
    const column = determineColumn(task);
    switch (column) {
      case 'todo':
        setTodoTasks([...todoTasks, task]);
        break;
      case 'inProgress':
        setInProgressTasks([...inProgressTasks, task]);
        break;
      case 'done':
        setDoneTasks([...doneTasks, task]);
        break;
      default:
        break;
    }
  };

  // Function to determine the column based on the task status  
  const determineColumn = (task) => {
    // For demonstration purposes, let's assume the task status is determined based on its name
    // You should replace this logic with your actual task status determination logic
    if (task.toLowerCase().includes('todo')) {
      return 'todo';
    } else if (task.toLowerCase().includes('in progress')) {
      return 'inProgress';
    } else if (task.toLowerCase().includes('done')) {
      return 'done';
    } else {
      // Default to todo column if status is unknown
      return 'todo';
    }
  };

  return (
    <Container sx={{ mt: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid black' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>To Do ({todoTasks.length})</Typography>
              <Button onClick={() => handleAddTask("New Task for ToDo")} size="small">
                <AddCircleOutlineIcon />
              </Button>
            </CardContent>
            {todoTasks.map((task, index) => (
              <Card key={index} sx={{ border: '1px solid black', width: '95%', margin: 'auto', marginBottom: '8px' }}>
                <CardContent>
                  <Typography>{task}</Typography>
              </CardContent>
            </Card>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid black' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>In Progress ({inProgressTasks.length})</Typography>
              <Button onClick={() => handleAddTask("New Task in Progress")} size="small">
                <AddCircleOutlineIcon />
              </Button>
            </CardContent>
            {inProgressTasks.map((task, index) => (
              <Card key={index} sx={{ border: '1px solid black', width: '95%', margin: 'auto', marginBottom: '8px' }}>
                <CardContent>
                  <Typography>{task}</Typography>
                </CardContent>
              </Card>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid black' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>Done ({doneTasks.length})</Typography>
              <Button onClick={() => handleAddTask("New Task Done")} size="small">
                <AddCircleOutlineIcon />
              </Button>
            </CardContent>
            {doneTasks.map((task, index) => (
              <Card key={index} sx={{ border: '1px solid black', width: '95%', margin: 'auto', marginBottom: '8px' }}>
                <CardContent>
                  <Typography>{task}</Typography>
                </CardContent>
              </Card>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
