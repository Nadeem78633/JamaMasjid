import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
          paddingRight: "100px",
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
              gfdgfg
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
