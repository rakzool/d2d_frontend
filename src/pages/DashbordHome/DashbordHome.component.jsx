import React, { useState, useEffect } from "react";
import { GetTeamDetails } from "../../api/api";
import Styles from "./DashboardHome.module.scss";
import Avatar from "./avatar.module";
import CredentialUpdate from "./credentialForm.component";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";


import { MdLeaderboard } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import jwt_decode from "jwt-decode";

export default function DashbordHome() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const arr = [1, 2, 3, 4];





  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      const user = jwt_decode(token);
      const response = await GetTeamDetails(user.userName);
      
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
        <div className={Styles.contentArea}>
          <div className={Styles.teamArea}>
            <h1>{user.data.teamName}</h1>
            <div className={Styles.teamLeadArea}>
              <h3>{user.data.teamLead}</h3>
              <h3 className={Styles.size}>{user.teamSize}</h3>
            </div>
            <div className={Styles.Members}>
              <ul>
                {arr.map((ele) => {
                  if (user.data[`member${ele}`] === "") {
                    return <span key ={ele}></span>;
                  } else {
                    return (
                      <li key={ele}>
                        <div className={Styles.MembersInner}>
                          <div className={Styles.avatar}>
                            <Avatar />
                          </div>
                          <div>
                            <h4>{user.data[`member${ele}`]}</h4>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
              <div>
                <Button
                  variant="contained"
                  sx={{ background: "#589636", textTransform: "initial" }}
                >
                  <MdLeaderboard style={{ fontSize: "1.3rem" }} />
                  &nbsp; View Leaderboard
                </Button>
              </div>
            </div>
          </div>
          <div className={Styles.infoArea}>
            <div className={Styles.HostArea}>
              <div>
                <h1>
                  <AiFillGithub /> Github Repo URL
                </h1>
                <h4>https://github.com/rakzool/d2d_frontend</h4>
              </div>
              <div>
                <h1>
                  <BsLink45Deg /> Hosted Web Project URL
                </h1>
                <h4>https://dare2dev.netlify.app/</h4>
              </div>
              <div>
                <h1>
                  <AiOutlineMail /> Contact Mail
                </h1>
                <h4>{user.email}</h4>
              </div>
            </div>
            <CredentialUpdate />
          </div>
        </div>
      </div>
    );
  }
}
