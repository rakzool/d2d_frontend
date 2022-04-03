import React from "react";
import DashboardHeader from "../../../components/DashbordHeader/DashboardHeader.component";
import NotFoundRoute from "./notfoundRoute.component";
import { Outlet } from "react-router-dom";

export default function DashbordRoute() {
   if(localStorage.loggedIn){
     return(
       <div>
         <NotFoundRoute/>
       </div>
     )
   }else{
     return(
      <div>
      <DashboardHeader />
      <Outlet />
    </div>
     );
   }
}
