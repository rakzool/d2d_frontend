import React from "react";
import NavBar from "../../../components/navBar/navBar.component";
import { Outlet } from "react-router-dom";

export default function MainRoute() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
