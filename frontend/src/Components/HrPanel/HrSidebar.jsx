import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import styles from "./HrSidebar.module.css"; // Import CSS module for styling
import { AllFunction } from "../store/store";

const HrSidebar = ({ onSelectTab }) => {
  const { userAuth, hrAuth } = useContext(AllFunction);
  axios.defaults.withCredentials = true;
  const [isOpen, setIsOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleTabClick = (tabName) => {
    onSelectTab(tabName);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = (e) => {
    axios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        // window.location.href = "/";
        location.replace("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles["sidebar-toggle"]} onClick={toggleSidebar}>
        &#9776;
      </div>
      <ul className={styles["sidebar-menu"]}>
        <li onClick={() => handleTabClick("jobs")} className={styles.sidename}>
          Jobs
        </li>
        <div className={styles.line}></div>
        <li
          onClick={() => handleTabClick("search")}
          className={styles.sidename}
        >
          Search Candidate
        </li>
        <div className={styles.line}></div>
        <li
          onClick={() => handleTabClick("setting")}
          className={styles.sidename}
        >
          profile
        </li>
      </ul>

      {!hrAuth && (
        <button className={styles.btn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default HrSidebar;
