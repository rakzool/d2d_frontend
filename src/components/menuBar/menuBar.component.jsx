import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import { FaBars } from "react-icons/fa";
import Styles from "./menubar.module.scss";

export default function MenuBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => toggleDrawer(true)}
      >
        <FaBars />
      </IconButton>
      <SwipeableDrawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <div className={Styles.dawerStyle}>this is a drawer</div>
      </SwipeableDrawer>
    </div>
  );
}
