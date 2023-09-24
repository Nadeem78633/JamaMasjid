import React, { useState, useEffect } from "react";

import { getAllTasks, updateTask, deleteTask } from "../../firebase";

// Loader when we loading task from user
import CircularProgress from "@mui/material/CircularProgress";

// Material UI
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="success" />
      </div>
    );
  }

  // const avatarColors = [
  //   "linear-gradient(135deg, #6016e5 0%, #16e560 100%)",

  //   "#fe332d",
  //   "#535353",
  // ];

  console.log(registeredUsers);
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <Card style={{ marginTop: "100px" }}>
          <CardContent>
            <Typography
              style={{
                color: "grey",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Users
            </Typography>
            <Grid container spacing={2}>
              {tasks.map((task, index) => (
                <Grid key={task.id} item xs={12} md={6} sm={12}>
                  {editingTask === task.id ? (
                    <TaskEditForm
                      task={task}
                      onSave={(updatedData) =>
                        handleUpdateTask(task.id, updatedData)
                      }
                    />
                  ) : (
                    <>
                      <Box sx={{ width: "100%" }}>
                        <nav aria-label="main mailbox folders">
                          <List>
                            <ListItem disablePadding>
                              <ListItemIcon>
                                <Avatar
                                  disablePadding
                                  variant="circular"
                                  style={{
                                    color: "white",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "30px",
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px",
                                    background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                                  }}
                                >
                                  {task.userName.slice(0, 1).toUpperCase()}
                                </Avatar>
                              </ListItemIcon>
                              <ListItemText disablePadding>
                                <Typography
                                  style={{
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                  }}
                                >
                                  {task.userName}
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "14px",
                                    fontFamily: "Poppins",
                                    fontWeight: "500",
                                    color: "#8789A3",
                                  }}
                                >
                                  {task.fatherName}
                                </Typography>
                                <Typography
                                  style={{
                                    color: "#8789A3",
                                    fontSize: "14px",
                                    fontWeight: "500",

                                    fontFamily: "Poppins",
                                  }}
                                >
                                  {task.phoneNumber}
                                </Typography>
                              </ListItemText>

                              <div
                                style={{ display: "flex", direction: "row" }}
                              >
                                <Button
                                  variant="contained"
                                  size="small"
                                  style={{
                                    textTransform: "none",
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: "500",

                                    background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                                  }}
                                  onClick={() => handleEditClick(task.id)}
                                >
                                  <EditOutlinedIcon
                                    style={{ width: "30px", height: "30px" }}
                                  />
                                </Button>
                                <Button
                                  size="small"
                                  variant="contained"
                                  style={{
                                    textTransform: "none",
                                    background: `linear-gradient(135deg, gray 0%, black 100%)`,

                                    marginLeft: "10px",
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                  }}
                                  onClick={() => handleDeleteTask(task.id)}
                                >
                                  <DeleteIcon
                                    style={{ width: "30px", height: "30px" }}
                                  />
                                </Button>
                              </div>
                            </ListItem>
                          </List>
                        </nav>
                        <Divider style={{ width: "100%" }} />
                      </Box>
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
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
