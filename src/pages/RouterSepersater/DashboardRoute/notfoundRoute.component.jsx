import React from 'react'
import ParticleBackground from '../../../components/ParticleEffect/particleBackground.component';
import { useNavigate } from 'react-router';
import Classes from "./notfoundRoute.module.scss";
import { Button } from "@mui/material";

export default function NotFoundRoute() {
    const navigate = useNavigate();
    const imageUrl = "https://c.tenor.com/u7lPRIZwv00AAAAC/bahut-tez.gif";
    const handleClick = () => {
        navigate("/");
    }
    return(<div >
        <div className={Classes.backdrop}>
          <ParticleBackground />
        </div>
        <div className={Classes.imageContainer}>
            <img src={imageUrl} alt="Simon go back !!"/>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3399FF",
                  marginTop : "2rem",
                  borderRadius: "5px",
                  padding: "5px 25px",
                  color: "white",
                  fontSize: "1.2rem",
                  letterSpacing: "2px",
                  textTransform: "initial",
                }}
                onClick ={handleClick}

              >
                Simon Go back
              </Button>
        </div>

         
    </div>)
}