import React from "react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Styles from "./homeSectionMain.module.scss";
import Image from "./random1.png";
import CountdownTimer from "../CountdownTimer/countdownTimer.component";

export default function HomeSectionMain() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={Styles.OpeningBanner}>
        <div className={Styles.Content}>
          <div className={Styles.logoRender}>
            <h1>{`< logo goes here >`}</h1>
            <div className={Styles.byline}>
              Imagin . <span>Innovate</span> . Create
            </div>
          </div>
          <CountdownTimer />
          <div className={Styles.Infographic}>
            <p>
              What dare to dev is and the
              <br />
              information about it that
              <br />
              inspires some to regiter
              <br />
              on visit
            </p>
          </div>
          <div className={Styles.registerBtn}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register now{" "}
            </Button>
          </div>
        </div>
        <div className={Styles.flexer} />
        <div className={Styles.ImageBox}>
          <img
            src={Image}
            alt="Confused developer umpa lumpas.."
            className={Styles.imageContainer}
          />
        </div>
      </div>
    </div>
  );
}
