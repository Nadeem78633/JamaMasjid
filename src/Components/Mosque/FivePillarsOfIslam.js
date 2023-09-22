import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Images

import ramzan2 from "../images/ramzan2.jpg";
import namaz from "../images/namaz.jpg";
import sahada1 from "../images/sahada1.jpg";
import sahada2 from "../images/sahada2.jpg";
import sahada3 from "../images/sahada3.jpg";
import sahada4 from "../images/sahada4.jpg";
import zakat1 from "../images/zakat1.jpg";
import zakat2 from "../images/zakat2.jpg";
import zakat3 from "../images/zakat3.jpg";
import zakat4 from "../images/zakat4.jpg";
import hajj1 from "../images/hajj1.jpg";
import hajj2 from "../images/hajj2.jpg";
import hajj3 from "../images/hajj3.jpg";
import hajj4 from "../images/hajj4.jpg";

import "react-circular-progressbar/dist/styles.css";
// Importing Image

// Card Import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";

const FivePillarsOfIslam = () => {
  const [progress, setProgress] = useState(70);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Card style={{ boxShadow: "none" }}>
          <CardContent>
            <Typography
              variant="h5"
              style={{
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              Five Pillars Of Islam
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2.4}>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={sahada1}
                      sx={{ boxShadow: 3 }}
                      style={{ height: "200px", width: "200px" }}
                    />
                  </CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "#0ca0fe",
                    }}
                  >
                    Sahada
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={namaz}
                      sx={{ boxShadow: 3 }}
                      style={{ height: "200px", width: "200px" }}
                    />
                  </CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "#ff958a",
                    }}
                  >
                    Namaz
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={ramzan2}
                      sx={{ boxShadow: 3 }}
                      style={{ height: "200px", width: "200px" }}
                    />
                  </CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "#8c84fe",
                    }}
                  >
                    Ramzan
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={zakat4}
                      sx={{ boxShadow: 3 }}
                      style={{ height: "200px", width: "200px" }}
                    />
                  </CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "#fe88bf",
                    }}
                  >
                    Zakat
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={hajj2}
                      sx={{ boxShadow: 3 }}
                      style={{ height: "200px", width: "200px" }}
                    />
                  </CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      
                      color: "#35cf87",
                    }}
                  >
                    Hajj
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default FivePillarsOfIslam;
