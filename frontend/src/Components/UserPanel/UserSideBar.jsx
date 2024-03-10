import React, { useState, useEffect } from "react";
import styles from "./UserSidebar.module.css"; // Import CSS module for styling
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const HrSidebar = ({onSelectedTab}) => {
  
  return (
    <div className={`${styles.sidebar} `}>
      <div className={styles["sidebar-toggle"]}>
       
      </div>
      <ul className={styles["sidebar-menu"]}>
        <li onClick={()=>{onSelectedTab("profile")}}>Profile</li>
        <li onClick={()=>{onSelectedTab("skills")}}>Skills</li>
        <li onClick={()=>{onSelectedTab("education")}}>Educations details</li>
        <li onClick={()=>{onSelectedTab("experience")}}>Educations details</li>
       
      </ul>
    </div>
  );
};

export default HrSidebar;
