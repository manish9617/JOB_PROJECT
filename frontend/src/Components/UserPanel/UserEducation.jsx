import React from "react";
import Education from "./Education";
import "./user.css";
function UserEducation() {
  return (
    <div className="education">
      <div className="first">
        <h1>Eduaction Details</h1>
        <button className="btn btn-primary">Add Education</button>
      </div>
      <Education></Education>
      <Education></Education>
      <Education></Education>
      <Education></Education>
      <Education></Education>
      <Education></Education>
      <Education></Education>
      <Education></Education>
    </div>
  );
}

export default UserEducation;
