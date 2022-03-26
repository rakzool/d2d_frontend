import React, { useState } from "react";
import Classes from "./RegisterPage.module.scss";
import ParticleBackground from "../../components/ParticleEffect/particleBackground.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
 

export default function RegisterPage() {
  const teamSize = [
    {
      value: 1,
      label: "One",
    },
    {
      value: 2,
      label: "Two",
    },
    {
      value: 3,
      label: "Three",
    },
    {
      value: 4,
      label: "Four",
    },
  ];

  const [teamdata, setTeamData] = useState({
    teamName: "",
    teamLead: "",
    data: {
      teamSize: 1,
      memberOne: "",
      memberTwo: "",
      memberThree: "",
      memberFour: "",
    },
  });

  let fields = new Array(teamdata.data.teamSize).fill("").map((_, i) => i + 1);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleTeamChange = (event) => {
    const value = event.target.value;
    setTeamData({
      data: {
        teamSize: value,
      },
    });

    
  };
  return (
    <div className={Classes.DivWrapper}>
       <div className={Classes.backdrop}>
        <ParticleBackground />
      </div>
      <div>
        <h1>Register</h1>
        <div className={Classes.formWrapper}>
          <form>
            <ThemeProvider theme={darkTheme}>
              <h1>Basic Details</h1>
              <Box>
                <TextField
                  required
                  label="Team Name"
                  defaultValue="   "
                  sx={{ mr: 3, mt:2  }}
                  className={Classes.InnerField}
                />
                <TextField
                  required
                  label="Team Leader Name"
                  defaultValue="   "
                  sx={{ mr: 3,mt:2 }}
                  className={Classes.InnerField}
                />
                <TextField
                  select
                  label="Team Size"
                  value={teamdata.data.teamSize}
                  onChange={handleTeamChange}
                  sx={{ mr: 3,mt:2 }}
                  className={Classes.SelectField}
                >
                  {teamSize.map((ele, index) => {
                    return (
                      <MenuItem key={index} value={ele.value}>
                        {ele.label}
                      </MenuItem>
                    );
                  })}
                </TextField>

                <div className={Classes.dynamicFields}>
                 
                  <h1>Team Details</h1>
                  <div >
                  {fields.map((ele) => {
                    return (
                      <TextField
                        required
                        label={`Name of Member ${ele}`}
                        defaultValue="   "
                        sx={{ mr: 4,mt:2, width: "32ch" }}
                        key={ele}
                      />
                    );
                  })}
                  </div>
                </div>
                <div className={Classes.loginArea}>
                  <h1>Account Credentials</h1>
                  <div className={Classes.userInfo}>
                    <TextField label = "User Name"   sx={{mt:3 }} className={Classes.UserFields}/>
                    <TextField type="password" label = "Password"   sx={{mt:3 }} className={Classes.UserFields}/>
                    <TextField type="password" label = "Confirm Password"  sx={{mt:3 }} className={Classes.UserFields}/>
                  </div>
                </div>
              </Box>

            </ThemeProvider>
            <div className={Classes.submitArea}>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3399FF",
                  borderRadius: "5px",
                  padding: "5px 25px",
                  color: "white",
                  fontSize : "1.2rem",
                  letterSpacing : "2px",
                  textTransform : "initial"
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
