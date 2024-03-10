import React, { useState } from "react";
import styles from "./UserDetils.module.css";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import axios from "axios";

function UserDetils({tab}) {
  const [name, setname] = useState();
  const [add, setadd] = useState();
  const [cont, setcont] = useState();
     axios.get("",(req,res)=>
     {
        
     })

  return (
    <div className={styles.main}>
      {
        tab==="profile" && <div className={styles.pro}>
        <h2 className="text-4xl font-bold">Profile Information</h2>
        <hr />
        <div className={styles.profile}>
          <div className={styles.left}>
            <img src="bhalot.jpg" className={styles.img} />
            <h2>Name: bhalot</h2>
            <hr></hr>
            <button className={`${styles.resume} mt-6 ml-5 p-1`}>
              View Resume
            </button>
          </div>
          <div className={styles.line}></div>
          <hr />
          <div className={styles.right}>
            <div className={styles.rightUp}>
              <h3>Address:bhopal</h3>
              <h3>Contact:9993432646</h3>
              <label>
                <h3>Current Status:</h3>
              </label>
              <button className={styles.nextbtn}>
                <h3>Student / Fresher / Employee</h3>
              </button>
            </div>
            <hr />
          </div>
        </div>
      </div>
      }

      {tab==="skills" && <Skills></Skills>}
      {tab==="education" && <Education></Education>}
      {tab==="experience" && <Experience></Experience>}
    </div>
  );
}

export default UserDetils;
