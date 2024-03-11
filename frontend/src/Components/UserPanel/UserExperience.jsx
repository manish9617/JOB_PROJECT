import React from "react";
import Experience from "./Experience";
import "./user.css";
function UserExperience() {
  return (
    <div className="education">
      <div className="first">
        <h1>Experience Details</h1>
        <button className="btn btn-primary">Add Experience</button>
      </div>
      <Experience></Experience>
      <Experience></Experience>
    </div>
  );
}

export default UserExperience;
