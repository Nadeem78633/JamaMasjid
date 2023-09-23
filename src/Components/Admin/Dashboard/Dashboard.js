import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { NavLink } from "react-router-dom";
import AddUser from "./AddUser";
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
        <Grid item xs={6} md={6} sm={6}>
          <Card>
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
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Add user
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Card>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center", // Center vertically
                  flexDirection: "column", // Stack items vertically
                }}
              >
                <Avatar
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#e8f0fd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <NavLink
                      to="/showUserPublic"
                      style={{ textDecoration: "none", color: "#2072df" }}
                    >
                      <PeopleAltRoundedIcon
                        style={{
                          height: "50px",
                          width: "50px",
                          cursor: "pointer",
                        }}
                      />
                    </NavLink>
                    {/* You can add text or labels here if needed */}
                  </div>
                </Avatar>

                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Users List
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Delete edit users */}
        <Grid item xs={12} md={12} sm={12}>
          <Card>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
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
                  to="/userList"
                  style={{ textDecoration: "none", color: "#2072df" }}
                >
                  <Avatar
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#fae8e6",
                    }}
                  >
                    <DeleteRoundedIcon
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#d83025",
                        cursor: "pointer",
                      }}
                    />
                  </Avatar>
                </NavLink>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Delete & Edit
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
