import React, { useState } from "react";
import Styles from "./Loginpage.module.scss";
import GDSC from "./gdscWhite.png";
import Trinity from "./Trinity_White.png";

import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import { userLogin } from "../../api/api";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Input } from "@mui/material";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

export default function LoginPageDialog() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    userLogin(user.email, user.password);
    setUser({
      email: "",
      password: "",
    });
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className={Styles.dialogDisplay}>
      <div className={Styles.logoArea}>
        <div>
          <img src={GDSC} alt="GDSC Logo" className={Styles.GDSCLogo} />
          &nbsp;&nbsp;
          <img src={Trinity} alt="TCF Logo" className={Styles.TCFLogo} />
        </div>
      </div>

      <div className={Styles.formArea}>
        <h1>Sign In</h1>
        <form onSubmit={handelSubmit}>
          <ThemeProvider theme={darkTheme}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <FormControl sx={{ m: 2, width: "100%" }} variant="standard">
                <TextField
                  id="email"
                  label="Your Email"
                  name="email"
                  variant="standard"
                  value={user.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl sx={{ m: 2, width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="password"
                  variant="standard"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <BiHide /> : <BiShow />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <div className={Styles.SignInButton}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3399FF",
                  borderRadius: "25px",
                  padding: "5px 25px",
                  color: "white",
                }}
                type="submit"
              >
                Let's Go
              </Button>
            </div>
          </ThemeProvider>
        </form>

        <div className={Styles.RegisterArea}>
          Don't have an account ?
          <span>
            <Link to="/register">Register Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
