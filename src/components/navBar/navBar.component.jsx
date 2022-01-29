import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MenuBar from "../menuBar/menuBar.component";
import Styles from "./navBar.module.scss";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const appStyle = {
    backgroundColor: "#0a192a80",
    borderColor: "#c2e0ff14",
    borderStyle: "solid",
    backdropFilter: "blur(20px)",
    borderWidth: "0px 0px thin",
  };

  const navigate = useNavigate();
  return (
    <div className={Styles.navigation}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={appStyle}>
          <Toolbar>
            <span className={Styles.menuIcon}>
              <MenuBar />
            </span>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dare 2 devlope
            </Typography>
            <ul className={Styles.navigationList}>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
