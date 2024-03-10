import React from "react";
import styles from "./UserDetils.module.css";

function UserEducation() {
  return (
    <div>
      <div className={styles.SecondPro}>
        <h3 className="font-bold text-xl">Education</h3>
        <hr />
        <label>Post Graduation</label>
        <h4>College-National Institiude of Technology Bhopal MCA</h4>
        <label>Under Graduation</label>
        <h4>Vikram University Ujjain madhya pradesh</h4>
        <button className="bg-black p-2 text-xl text-white rounded-[10px]">
          Edit
        </button>
      </div>
    </div>
  );
}

export default UserEducation;
