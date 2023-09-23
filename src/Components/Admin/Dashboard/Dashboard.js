import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

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
                background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
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
                  Add user
                </Typography>
                <AddUser />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Card style={{ background: "#99de9d" }}>
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
                  Users List
                </Typography>
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
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Delete edit users */}
        <Grid item xs={12} md={12} sm={12}>
          <Card style={{ background: "#ff7979" }}>
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
                  Edit & Delete
                </Typography>
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
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
