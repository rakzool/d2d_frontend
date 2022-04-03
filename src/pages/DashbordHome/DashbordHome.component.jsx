import React from "react";

export default function DashbordHome() {

  const handleSignout = () => {
    localStorage.setItem("loggedIn",false);
    window.location.href ="/";
  }
  return <div>This is the dashboard
    <br/>
     <button onClick={handleSignout}>sign out</button>
  </div>;
 
}
