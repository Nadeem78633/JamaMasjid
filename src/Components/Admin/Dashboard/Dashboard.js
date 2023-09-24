import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { NavLink } from "react-router-dom";
import AddUser from "./AddUser";
import { useAuthState } from "react-firebase-hooks/auth";
import glass1 from '../../images/glass1.jpg'
import blackBack from '../../images/blackBack.png'
import blue from '../../images/blue.jpg'

import wallpaper4 from '../../images/wallpaper_5.jpg'


const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: "100px",
          paddingLeft: "5%",
          paddingRight: "5%",
          backgroundImage: `url(${wallpaper4})`,
          backgroundSize: "cover", // Cover the entire background
          backgroundRepeat: "no-repeat", // Prevent image repetition
          backgroundPosition: "center center",
       
        
        }}
      >
        <Grid item xs={6} md={6} sm={6}>
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.2)",

              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
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
                    color: "white",
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
              background: "rgba(255, 255, 255, 0.2)",

              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
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
              background: "rgba(255, 255, 255, 0.2)",

              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
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
