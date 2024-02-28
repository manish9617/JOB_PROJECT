import React from "react";
import styles from "./JobDetail.module.css";

const JobDetail = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="text-6xl font-bold">MicroSoft</h1>
        <hr />

        <div className={styles.jobDetails}>
          <h2 className="text-4xl font-bold">Job Details</h2>
          <hr />
          <div className={styles.jobD}>
            <div className="p-2">
              <p>
                <strong>Education:</strong> Graduate (Bachelor Degree)
              </p>
              <p>
                <strong>Experience:</strong> Freshers can apply
              </p>
              <p>
                <strong>Location</strong> Kolkata, Kolkata, West Bengal - 700080
              </p>
            </div>

            <div className="p-2">
              <p>
                <strong>English Level:</strong> average English
              </p>
              <p>
                <strong>Gender:</strong> Both
              </p>
              <p>
                <strong>Salary:</strong> 25000
              </p>
              <p>
                <strong>Type:</strong> Intership
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Line}></div>
        <div className={styles.jobDescription}>
          <h2 className="text-4xl font-bold">Job Description</h2>
          <hr />
          <p>
            *BAJAJ ALLIANZ LIFE INSURANCE COMPANY* ( *BALIC* ) Salary - ( *19k
            Including Allowance*) + *Incentives* Recruitment Process -
            *Interview* + *IRDAI Exam*( *Training will be Given*) Exam Center :
            Nearest *NSEIT CENTER of your Location* Office Branch: *KOLKATA* (
            *BUT WORK FROM HOME*)
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
