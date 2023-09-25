import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Divider from "@mui/material/Divider";

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
        {/* Total Users Amount Investment */}
        <Divider
          style={{
            width: "100%",

            marginLeft: "1.7%",
            border: "1px solid rgba(187, 196, 206, 0.35)",
            marginBottom: "15px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid item xs={4} md={4} sm={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // Center vertically
                }}
              >
                <Avatar
                  style={{
                    width: "45px",
                    height: "45px",
                    background: "rgba(187, 196, 206, 0.35)",
                  }}
                >
                  <PeopleOutlineIcon
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </Avatar>
                <div>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    Total Users
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "15px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    100+
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ border: "1px solid rgba(187, 196, 206, 0.35)" }}
          />
          <Grid item xs={4} md={4} sm={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // Center vertically
                }}
              >
                <Avatar
                  style={{
                    width: "45px",
                    height: "45px",
                    background: "rgba(187, 196, 206, 0.35)",
                  }}
                >
                  <PeopleOutlineIcon
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </Avatar>
                <div>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    Total Users
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "15px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    100+
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ border: "1px solid rgba(187, 196, 206, 0.35)" }}
          />
          <Grid item xs={4} md={4} sm={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // Center vertically
                }}
              >
                <Avatar
                  style={{
                    width: "45px",
                    height: "45px",
                    background: "rgba(187, 196, 206, 0.35)",
                  }}
                >
                  <PeopleOutlineIcon
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </Avatar>
                <div>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    Total Users
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingLeft: "15px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#8789A3",
                    }}
                  >
                    100+
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Box>
        <Divider
          style={{
            width: "100%",
            marginTop: "15px",
            marginLeft: "1.7%",
            border: "1px solid rgba(187, 196, 206, 0.35)",
          }}
        />

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
                    marginTop: "8px",
                  }}
                >
                  Add user
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Card
            style={{
              background: `linear-gradient(135deg, #99de9d 0%,  #013220 100%)`,
            }}
          >
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
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  to="/showUserPublic"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <PeopleAltRoundedIcon
                    style={{
                      height: "50px",
                      width: "50px",
                      marginTop: "10px",

                      cursor: "pointer",
                    }}
                  />
                </NavLink>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "white",
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
          <Card
            style={{
              background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
            }}
          >
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
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Delete & Edit
                </Typography>
                <NavLink
                  to="/showUser"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <DeleteRoundedIcon
                    style={{
                      height: "50px",
                      width: "50px",
                      marginTop: "10px",

                      cursor: "pointer",
                    }}
                  />
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
