import React, { useState, useEffect } from "react";
import { GetTeamDetails } from "../../api/api";
import Styles from "./DashboardHome.module.scss";
import Avatar from "./avatar.module";
import CircularProgress from "@mui/material/CircularProgress";
import jwt_decode from "jwt-decode";
import {RiMedalFill} from 'react-icons/ri'

export default function DashbordHome({ teamName }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const arr = [1,2,3,4];

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      const user = jwt_decode(token);
      const response = await GetTeamDetails(user.userName);
      console.log(response);
      setUser(response);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className={Styles.mainSpinner}>
        <CircularProgress color="success" />
      </div>
    );
  } else {
    return (
      <div className={Styles.main}>
        <div className={Styles.conentArea}>
          <h2>{user.data.teamName}</h2>
          <div className={Styles.DetailArea}>
            <h4>Team Size   : &nbsp;<span>{user.teamSize} </span> &nbsp; Members</h4>
            <h4><div>Team Leader&nbsp; <RiMedalFill />&nbsp;</div> : &nbsp;<span>{user.data.teamLead} </span> </h4>
          </div>
          <div className={Styles.members}>
            <h3>Members</h3> 
            <ui className={Styles.list}>
               {arr.map((ele) => {
                 if(user.data[`member${ele}`] !== ""){
                   return(
                     <div className={Styles.listInner} key = {ele}>
                       <div className={Styles.avatar}>
                       <Avatar />
                       </div>
                       <div className={Styles.memberName}>
                         <h6>
                         {user.data[`member${ele}`]}
                         </h6>
                       </div>
                      
                     </div>
                   )
                 }else{
                   return(null);
                 }

               })}
            </ui>
          </div>
        </div>
      </div>
    );
  }
}
