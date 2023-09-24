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
              background: `linear-gradient(135deg, #ff7979 0%, #8B0000 100%)`,
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
                  to="/userList"
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
