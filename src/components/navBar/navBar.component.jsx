import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MenuBar from "../menuBar/menuBar.component";
import Styles from "./navBar.module.scss";

export default function NavBar(props) {
  const appStyle = {
    backgroundColor: "#0a192a80",
    borderColor: "#c2e0ff14",
    borderStyle: "solid",
    backdropFilter: "blur(20px)",
    borderWidth: "0px 0px thin",
  };
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
