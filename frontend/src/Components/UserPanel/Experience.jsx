import React from "react";
import "./experience.css";
import { FaRegEdit } from "react-icons/fa";
function Experience() {
  return (
    <div className="experience1">
      <div className="d-flex justify-content-between pe-3">
        <h className="fs-5  fw-bold">Role</h>
        <button>
          <FaRegEdit />
        </button>
      </div>

      <div className="row">
        <div className="col-3">Comapny Name</div>
        <div className="col-8">Microsoft </div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">Microsoft</div>
      </div>
      <div className="row">
        <div className="col-3">Description</div>
        <div className="col-8">Microsoft</div>
      </div>
    </div>
  );
}

export default Experience;
