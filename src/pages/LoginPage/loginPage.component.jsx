import React from "react";
import LoginPageDialog from "./loginPageDialog.component";
import ParticleBackground from "../../components/ParticleEffect/particleBackground.component";
import Styles from "./Loginpage.module.scss";

export default function LoginPage() {
  return (
    <div className={Styles.loginPageContainer}>
      <div className={Styles.backdrop}>
        <ParticleBackground />
      </div>
      <div className={Styles.overLay}>
        <LoginPageDialog />
      </div>
    </div>
  );
}
