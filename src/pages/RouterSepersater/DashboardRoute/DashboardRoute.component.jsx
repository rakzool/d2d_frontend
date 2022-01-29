import React from "react";
import DashboardHeader from "../../../components/DashbordHeader/DashboardHeader.component";
import { Outlet } from "react-router-dom";

export default function DashbordRoute() {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
}
