import React from "react";
import Styles from "./menubar.module.scss";
export default function DrawerContent({navLinks}) {
  return (
    <div>
      <div className={Styles.DrawerHeader}>Dare 2 Develope</div>
      <div className={Styles.DrawerNavigation}>
        <ul>
          {
            navLinks.map((ele,index) => {
              return(
                <li key={index}>{ele}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
