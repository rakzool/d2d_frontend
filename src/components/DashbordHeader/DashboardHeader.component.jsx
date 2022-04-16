import React from "react";
import Styles from "./DashboardHeader.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {BiLogOutCircle} from "react-icons/bi";
import MenuBar from "../menuBar/menuBar.component";
import { useNavigate } from "react-router-dom";


export default function DashboardHeader({teamName}) {
  const navigate = useNavigate();
  const handleSignout = () => {
  localStorage.removeItem("token");
  navigate("/");

 }
  const appStyle = {
    backgroundColor: "#284363",
    borderColor: "#c2e0ff14",
    borderStyle: "solid",
    backdropFilter: "blur(20px)",
    borderWidth: "0px 0px thin",
  };

  const navLinks = ["link 1", "Link 2", "Link 3"];

  return (
    <div className={Styles.navigation}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appStyle}>
        <Toolbar>
          <span className={Styles.menuIcon}>
            <MenuBar navLinks = {navLinks}/>
          </span>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Dare 2 Develope
          </Typography>
          
          <Button  variant="contained"  sx={{background : "#589636", textTransform : "initial"}} onClick={handleSignout}>
            Logout&nbsp;<BiLogOutCircle style={{fontSize :"1.3rem"}}/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
  );
}
