// CompanyHeader.jsx

import React from "react";
import styles from "./JobHeader.module.css";

const JobHeader = () => {
  return (
    <header className={styles.h11}>
      <div className={styles.HH}>
        <div className={styles.overlay}>
          <h1 className="text-[50px] font-bold">MicroSoft</h1>
        </div>

        <div className={styles.btn1}>
          <button className={styles.but}>Apply Now</button>
        </div>
      </div>
    </header>
  );
};

export default JobHeader;
