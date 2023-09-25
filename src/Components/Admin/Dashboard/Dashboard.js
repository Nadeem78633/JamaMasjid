import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

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
        <AmountSpendUsers />

        <Grid item xs={4} md={4} sm={4}>
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
        <Grid item xs={4} md={4} sm={4}>
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
                  to="/showUserPublic"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                    }}
                  >
                    <GroupOutlinedIcon
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#f29900",
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
                  Users List
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Delete edit users */}
        <Grid item xs={4} md={4} sm={4}>
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
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                    }}
                  >
                    <DeleteOutlineOutlinedIcon
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#e60934",
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
