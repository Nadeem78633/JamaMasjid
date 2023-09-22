import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Images
import Mosque from "../images/Mosque.jpg";

// Importing Image

// Card Import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";

const ComeToMosque = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "50px" }}>
        <Grid item xs={12} md={12}>
          <Card style={{boxShadow:'none'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
                    <CardContent>
                      <CardMedia component="img" image={Mosque} alt="mosque" />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
                    <CardContent>
                    <Button
                        style={{
                          backgroundColor: "#5e3afc",
                          marginBottom: "40px",
                        borderRadius:'20px'
                        }}
                        variant="contained"
                      >
                        Explore More
                      </Button>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{ marginBottom: "20px", fontWeight: 600 }}
                      >
                        Come To The Mosque For Your Spiritual Treatment
                      </Typography>

                      <Typography
                        variant="body1"
                        className="believer"
                        style={{ color: "#727272" }}
                      >
                        The Weakened School of the Islamic Center of Allah is
                        committed to <br />
                        providing quality islamic Education according to the
                        quran and <br />
                        the Sunnah of the Prophet Mohammed to a <br />
                        diverse student population in the greater area.
                      </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};
export default ComeToMosque;
