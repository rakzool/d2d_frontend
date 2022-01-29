import React from "react";
import Styles from "./menubar.module.scss";
export default function DrawerContent() {
  return (
    <div>
      <div className={Styles.DrawerHeader}>Dare 2 Develope</div>
      <div className={Styles.DrawerNavigation}>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
