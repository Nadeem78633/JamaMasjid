import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import gradient from "../../icons/gradient.svg";

import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
      <Grid
        container
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            marginTop: "90px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              height: "500px",
              background: "#FFFFFF",

              marginTop: "60px",
              marginBottom: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <Typography
                style={{
                  height: "48.3px",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "36px",
                  lineHeight: "44px",
                  textAlign: "center",

                  color: "#000000",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                Login
              </Typography>
              <Typography
                style={{
                  height: "20.86px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom: "10px",
                }}
              >
                Email address
              </Typography>
              <TextField
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  height: "43.91px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
                type="text"
                placeholder="Email"
              />
              <Typography
                style={{
                  height: "20.86px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                Password
              </Typography>
              <TextField
                variant="standard"
                style={{
                  width: "100%",
                  height: "43.91px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Link
                  to="/reset"
                  style={{
                    width: "100%",
                    height: "20.86px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    /* Link */
                    color: "gray",
                    textDecoration: "none",
                    marginTop: "20px",
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => logInWithEmailAndPassword(email, password)}
                  variant="contained"
                  style={{
                    textTransform: "none",
                    width: "356.77px",
                    height: "43.91px",
                    background: "linear-gradient(45deg, #dd47f9, #6fc9e0)",
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  LOGIN
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
