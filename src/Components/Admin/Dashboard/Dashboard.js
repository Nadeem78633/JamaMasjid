import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
              
                <AddUser />
                <Typography
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "white",
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
            <CardContent>2</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
