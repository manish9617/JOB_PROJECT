// CompanyHeader.jsx

import React from "react";
import styles from "./JobHeader.module.css";
import { toast } from "react-toastify";
const JobHeader = () => {
  function handleApply() {
    toast.success("Applied", {
      autoClose: 1000,
      onClose: () => {
        window.location.href = "/AllJobs";
      },
    });
  }
  return (
    <header className={styles.h11}>
      <div className={styles.HH}>
        <div className={styles.overlay}>
          <h1 className="text-[50px] font-bold">MicroSoft</h1>
        </div>

        <div className={styles.btn1}>
          <button className={styles.but} onClick={handleApply}>
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default JobHeader;
