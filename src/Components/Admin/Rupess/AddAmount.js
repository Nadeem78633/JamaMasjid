import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Firebase

import { getTaskById, updateTask } from "../../../firebase";

// Slide
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CreateUser from "../../Users/CreateUser";
import Typography from "@mui/material/Typography";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Avatar from "@mui/material/Avatar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Button from "@mui/material/Button";

import Slide from "@mui/material/Slide";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// Slide
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddAmount = () => {
  const params = useParams();

  const [filterYear, setFilterYear] = useState(""); // State for selected year filter

  // Logic to add amount
  const [newAmount, setNewAmount] = useState(); // State for the new amount to add

  // Firebase
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  // SLide
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Data fetching using firebase

  useEffect(() => {
    // Fetch the task by ID and update the state
    getTaskById(params.id)
      .then((taskData) => {
        setTask(taskData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
        setLoading(false);
      });
  }, [params.id]);

  // Converting months into string
  const getMonthName = (monthNumber) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthNumber - 1] || "";
  };
  // Extract unique years from tasks data
  // Extract unique years from tasks data and filter out empty strings
  const availableYears = Array.from(
    new Set(
      tasks?.years?.map((year) => year.year).filter((year) => year !== "")
    )
  );

  console.log(availableYears);

  // Handle year filter change
  const handleFilterChange = (event) => {
    setFilterYear(event.target.value);
  };
  console.log("user", tasks);

  //Logic to add amount

  const updateTaskWithAmount = () => {
    // Get the current year and month
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    // Create a copy of the task data
    const updatedTaskData = { ...tasks };

    // Find the index of the year for the selected year in the database
    const yearIndex = updatedTaskData.years.findIndex(
      (year) => year.year === currentYear
    );

    if (yearIndex !== -1) {
      // Year exists in the database, update the amount for the current month
      const yearData = updatedTaskData.years[yearIndex];

      // Find the index of the current month in the year's data
      const monthIndex = yearData.months.findIndex(
        (month) => month.month === currentMonth
      );

      if (monthIndex !== -1) {
        // Month exists, update the amount
        yearData.months[monthIndex].amount += newAmount;
      } else {
        // Month doesn't exist, create a new month object
        yearData.months.push({
          date: new Date().getDate(),
          month: currentMonth,
          amount: newAmount,
        });
      }
    } else {
      // Year doesn't exist, create a new year object
      updatedTaskData.years.push({
        year: currentYear,
        months: [
          {
            date: new Date().getDate(),
            month: currentMonth,
            amount: newAmount,
          },
        ],
      });
    }

    // Update the task data in Firebase Firestore
    updateTask(params.id, updatedTaskData)
      .then(() => {
        console.log("Task updated successfully");
        setNewAmount("");
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Poppins",
              }}
            >
              Add User
            </Typography>

            <CloseRoundedIcon
              onClick={handleClose}
              style={{
                color: "gray",
                height: "30px",
                width: "30px",

                cursor: "pointer",
              }}
            />
          </div>
        </DialogTitle>

        <DialogContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              variant="standard"
              size="small"
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(Number(e.target.value))}
              color="secondary"
            />
            <Button
              style={{
                textTransform: "none",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                color: "white",
                background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                marginTop: "10px",
              }}
              onClick={updateTaskWithAmount}
            >
              Add Amount
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div style={{ marginTop: "100px" }}>
        <Card>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  {tasks?.userName}
                </Typography>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    color: "#8789A3",
                  }}
                >
                  {tasks?.fatherName}
                </Typography>
              </div>
            </div>

            {/* Filter container */}
            <div
              style={{
                position: "relative",
              }}
            >
              <FormControl
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "10px",
                  zIndex: 1, // Ensure the filter is above content
                }}
              >
                <Select
                  value={filterYear}
                  onChange={handleFilterChange}
                  displayEmpty
                  variant="outlined"
                  style={{
                    height: "40px",
                    color: "#9055FF",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  <MenuItem value="">All Years</MenuItem>
                  {availableYears?.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div style={{marginTop:'10px'}}>
                <Button
                  style={{
                    textTransform: "none",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                  }}
                  onClick={handleClickOpen}
                  variant="contained"
                >
                  Add Amount
                </Button>
              </div>
            </div>

            {tasks?.years?.map(
              (yearData) =>
                // Apply year filter if selected, or display all years
                (!filterYear || filterYear === yearData?.year) && (
                  <div key={yearData?.year} style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center", // Center vertically
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        color: `#9055FF`,
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "8px",
                          color: "black",
                        }}
                      >
                        Year
                      </span>
                      <KeyboardArrowRightRoundedIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#8789A3",
                        }}
                      />
                      {yearData?.year}
                    </div>
                    <Grid container>
                      {yearData?.months?.map((month, index) => (
                        <Grid item xs={12} md={3} key={month.month}>
                          <div>
                            <Typography
                              style={{
                                fontSize: "15px",
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                backgroundColor: "#eaf9f6",
                                color: "#19b89e",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // To space items horizontally
                                marginLeft: "4px",
                                marginTop: "5px",
                                marginBottom: "5px",
                                borderRadius: "5px",
                              }}
                            >
                              <div style={{ paddingLeft: "10px" }}>
                                {month?.date}-{getMonthName(month.month)}
                              </div>
                              <div style={{ paddingRight: "10px" }}>
                                {month?.amount} &#8377;
                              </div>
                            </Typography>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                )
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddAmount;
