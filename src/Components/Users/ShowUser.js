import React, { useState, useEffect } from "react";

import { getAllTasks, updateTask, deleteTask } from "../../firebase";

// Material UI
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

function ShowUser() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // Fetch all tasks and update the state
    getAllTasks()
      .then((taskList) => {
        setTasks(taskList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  const handleEditClick = (taskId) => {
    setEditingTask(taskId);
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      await updateTask(taskId, updatedData);
      // After updating, set editingTask back to null
      setEditingTask(null);

      // Fetch the updated task list and update the state
      const updatedTaskList = await getAllTasks();
      setTasks(updatedTaskList);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);

      // Fetch the updated task list and update the state
      const updatedTaskList = await getAllTasks();
      setTasks(updatedTaskList);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const colors = ["#fdf2b3", "#d1eaed", "#ffdada", "#eafff4"];

  console.log(registeredUsers);
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <Grid container spacing={2} style={{ margin: "auto" }}>
          {tasks.map((task, index) => (
            <Grid item xs={12} md={3} key={task.id}>
              <Card
                style={{
                  backgroundColor: colors[index % colors.length],
                  width: "100%",
                }}
              >
                <CardContent>
                  {editingTask === task.id ? (
                    <TaskEditForm
                      task={task}
                      onSave={(updatedData) =>
                        handleUpdateTask(task.id, updatedData)
                      }
                    />
                  ) : (
                    <>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        {task.userName}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        {task.fatherName}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        {task.phoneNumber}
                      </Typography>

                      <div style={{ marginTop: "10px" }}>
                        <Button
                          variant="contained"
                          size="small"
                          style={{
                            textTransform: "none",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                          onClick={() => handleEditClick(task.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          style={{
                            textTransform: "none",
                            backgroundColor: "red",
                            marginLeft: "10px",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

// Rest of your component remains unchanged

// Component for editing a task
function TaskEditForm({ task, onSave }) {
  // Initialize updatedData from the task prop
  const [updatedData, setUpdatedData] = useState(task);

  // Update updatedData when the task prop changes
  useEffect(() => {
    setUpdatedData(task);
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the updatedData state
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          size="small"
          label="Username"
          name="userName"
          type="text"
          value={updatedData.userName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <TextField
          size="small"
          label="Father's Name"
          name="fatherName"
          type="text"
          value={updatedData.fatherName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <TextField
          size="small"
          label="Phone Number"
          name="phoneNumber"
          type="text"
          value={updatedData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Button
          color="secondary"
          type="submit"
          size="small"
          variant="contained"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default ShowUser;
