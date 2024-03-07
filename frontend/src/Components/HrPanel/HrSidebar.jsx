import React, { useState, useEffect } from "react";

import styles from "./HrSidebar.module.css"; // Import CSS module for styling

const HrSidebar = ({ onSelectTab }) => {
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

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles["sidebar-toggle"]} onClick={toggleSidebar}>
        &#9776;
      </div>
      <ul className={styles["sidebar-menu"]}>
        <li onClick={() => handleTabClick("jobs")}>Jobs</li>
        <li onClick={() => handleTabClick("search")}>Search Candidate</li>
        <li onClick={() => handleTabClick("setting")}>profile</li>
      </ul>
    </div>
  );
};

export default HrSidebar;
