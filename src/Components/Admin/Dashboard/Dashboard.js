import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

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
                  to="/showUserAdmin"
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
                  Users
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
                      width: "45px",
                      height: "45px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
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
