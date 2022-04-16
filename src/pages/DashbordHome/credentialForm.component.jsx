import React,{useState} from 'react'
import Styles from "./DashboardHome.module.scss";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { IoAddCircleOutline } from "react-icons/io5";

export default function CredentialUpdate() {
    const [details, setDetails] = useState({
        github: "",
        hostingUrl: "",
      });
    
    const darkTheme = createTheme({
        palette: {
          mode: "dark",
        },
      });

      const handleUpdate = (event) => {
        const {name, value} = event.target;
        setDetails({ ...details, [name]: value });
      };
      const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("Credentials Updated 🐱‍🏍🐱‍🏍");
        console.log(details);
        setDetails({
          github : "",
          hostingUrl : "",
        });
    
         
      };
    return(
        <div className={Styles.FormaArea}>
              <h1>Update Credentials</h1>
              <form onSubmit={handleFormSubmit}>
                <ThemeProvider theme={darkTheme}>
                  <Box>
                    <TextField
                      label="Web Hosting URL"
                      name="hostingUrl"
                      onChange={handleUpdate}
                      value={details.hostingUrl}
                      sx={{ mr: 3, mt: 2, width: "70ch" }}
                    />
                    <TextField
                      label="Github URL"
                      name="github"
                      value={details.github}
                      onChange={handleUpdate}
                      sx={{ mr: 3, mt: 2, width: "70ch" }}
                    />
                  </Box>
                </ThemeProvider>
                <div className={Styles.AddBtn}>
                  <Button
                    type="submit"
                    variant="contained"
                   
                    sx={{ background: "#589636", textTransform: "initial" }}
                  >
                    <IoAddCircleOutline style={{ fontSize: "1.3rem" }} />
                    &nbsp;Update Details
                  </Button>
                </div>
              </form>
            </div>
    );
}