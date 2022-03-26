import React, { useState } from "react";
import Classes from "./RegisterPage.module.scss";
import ParticleBackground from "../../components/ParticleEffect/particleBackground.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

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

    console.log(teamdata.data.teamSize);
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
                  sx={{ mr: 3, width: "55ch" }}
                />
                <TextField
                  required
                  label="Team Leader Name"
                  defaultValue="   "
                  sx={{ ml: 3, width: "55ch" }}
                />
                <TextField
                  select
                  label="Team Size"
                  value={teamdata.data.teamSize}
                  onChange={handleTeamChange}
                  sx={{ ml: 3, width: "20ch" }}
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
                  {fields.map((ele) => {
                    return (
                      <TextField
                        required
                        label={`Name of Member ${ele}`}
                        defaultValue="   "
                        sx={{ mr: 4, width: "32ch" }}
                      />
                    );
                  })}
                </div>
              </Box>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  );
}
