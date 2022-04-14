import React from "react";
import Styles from "./DashboardHeader.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MenuBar from "../menuBar/menuBar.component";

export default function DashboardHeader() {
  const appStyle = {
    backgroundColor: "#0a192a",
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
            Team Name
          </Typography>
          
          <Button color="inherit" >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
  );
}
