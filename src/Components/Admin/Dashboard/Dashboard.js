import React from "react";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ background: "#F8FAFF", marginTop: "100px" }}
      >
        <Grid
          item
          sm={12}
          md={8.5} // Use 12 columns for all screen sizes
          style={{
            background: "#F8FAFF",
            paddingRight: "20px",
          }}
        >
          Dashboard
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
