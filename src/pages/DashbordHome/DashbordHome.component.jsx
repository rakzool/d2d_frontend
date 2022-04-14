import React from "react";
import Styles from "./DashboardHome.module.scss";
export default function DashbordHome() {

  const handleSignout = () => {
    localStorage.setItem("loggedIn",false);
    localStorage.removeItem("token");
    window.location.href ="/";
  }
  return (<div className={Styles.main}>This is the dashboard
    <br/>
     <button onClick={handleSignout}>sign out</button>
  </div>);
 
}
