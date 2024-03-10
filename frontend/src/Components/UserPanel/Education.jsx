import React from "react";
import "./education.css";
import { FaRegEdit } from "react-icons/fa";
function Education() {
  return (
    <div className="education1">
      <div className="d-flex justify-content-between pe-3">
        <h className="fs-5  fw-bold">Post Graduation</h>
        <button>
          <FaRegEdit />
        </button>
      </div>
      <p>Institute Name</p>
      <p>Start Date to End date</p>
      <p>Certificate</p>
      <p>Percentage</p>
    </div>
  );
}

export default Education;
