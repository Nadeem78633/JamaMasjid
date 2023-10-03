import React,{useState,useEffect} from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import { getAllTasks } from "../../../firebase";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";




// List import
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


// Components
import AmountSpendUsers from "./AmountSpendUsers";
import { NavLink } from "react-router-dom";
import AddUser from "./AddUser";
import { useAuthState } from "react-firebase-hooks/auth";
const Dashboard = () => {

 
  
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "100px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        {/* New Grid */}

        <Grid item xs={12} md={6} sm={12}>
          <Box sx={{ width: "100%" }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                   
                      <AddUser />
                 
                  </ListItemIcon>
                  <ListItemText></ListItemText>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                    }}
                  >
                    Add User
                  </Typography>
                  
                </ListItem>
              </List>
            </nav>
            <Divider style={{ width: "100%" }} />
          </Box>
        </Grid>

        <AmountSpendUsers />

        <Grid item xs={6} md={6} sm={6}>
          <Card style={{ background: "#f3f2f2" }}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center", // Center vertically
                  flexDirection: "column", // Stack items vertically
                }}
              >
                <AddUser />
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",

                    marginTop: "8px",
                  }}
                >
                  Add User
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Card style={{ background: "#f3f2f2" }}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  to="/showUserForMosqueAdmin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar
                    style={{
                      width: "45px",
                      height: "45px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                    }}
                  >
                    <PeopleAltRoundedIcon
                      style={{
                        height: "30px",
                        width: "30px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </Avatar>
                </NavLink>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",

                    marginTop: "8px",
                  }}
                >
                  Mosque Users
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Card style={{ background: "#f3f2f2" }}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  to="/showUserForImamAdmin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar
                    style={{
                      width: "45px",
                      height: "45px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: `linear-gradient(135deg, #2EB62C 0%, #ABE098 100%)`,
                    }}
                  >
                    <PeopleAltRoundedIcon
                      style={{
                        height: "30px",
                        width: "30px",

                        cursor: "pointer",
                      }}
                    />
                  </Avatar>
                </NavLink>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",

                    marginTop: "8px",
                  }}
                >
                  Imam Users
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Delete edit users */}
        <Grid item xs={6} md={6} sm={6}>
          <Card style={{ background: "#f3f2f2" }}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center", // Center vertically
                  flexDirection: "column", // Stack items vertically
                }}
              >
                <NavLink
                  to="/showUser"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar
                    style={{
                      width: "45px",
                      height: "45px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: `linear-gradient(135deg, gray 0%, black 100%)`,
                    }}
                  >
                    <DeleteRoundedIcon
                      style={{
                        height: "30px",
                        width: "30px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </Avatar>
                </NavLink>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",

                    marginTop: "8px",
                  }}
                >
                  Delete
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
