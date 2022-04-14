import React, {useEffect,useState} from "react";
import DashboardHeader from "../../../components/DashbordHeader/DashboardHeader.component";
import NotFoundRoute from "./notfoundRoute.component";
import jwt_decode from "jwt-decode";
import { Outlet } from "react-router-dom";

export default function DashbordRoute() {

  const [login,setLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const sudo = async() => {
      const token = localStorage.getItem("token");
      if(token){
        const user = jwt_decode(token);
        if(!user){
          localStorage.removeItem("token");
          setLogin(false);
        }
        else{
          if(user.userName === 'admin'){
            setIsAdmin(true);
          }
          setLogin(true);
        }
      }
    } 

    sudo();
  }, [])
  
   if(!login){
     return(
       <div>
         <NotFoundRoute/>
       </div>
     )
   }
  else{
    if(isAdmin){
      return(<div><h1>Admin Dashboard</h1></div>)

    }
    else{
      return(
        <div>
        <DashboardHeader />
        <Outlet />
      </div>
       );
    }
  }
   
}
