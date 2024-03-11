import React from "react";
import "./education.css";
import { FaRegEdit } from "react-icons/fa";
function Education() {
  return (
    <div className="education1">
      <div className="d-flex justify-content-between pe-3">
        <h1 className="fs-5  fw-bold">Post Graduation</h1>
        <button>
          <FaRegEdit />
        </button>
      </div>
      <div className="row">
        <div className="col-3">Institute Name</div>
        <div className="col-8">DAVV</div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">11/01/2022 to 11/03/2022</div>
      </div>
      <div className="row">
        <div className="col-3">Percentage</div>
        <div className="col-8">82%</div>
      </div>
      <div className="row">
        <div className="col-3">Certificate</div>
        <div className="col-8">View</div>
      </div>
    </div>
  );
}

export default Education;
