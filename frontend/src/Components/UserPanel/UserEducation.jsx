import React, { useEffect, useState } from "react";
import Education from "./Education";
import "./user.css";
import axios from "axios";
function UserEducation() {
  const [data, setData] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    if (localStorage.getItem("token") != null && data === null) {
      axios.get("/educationDetails").then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.educa);
        }
      });
    }
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="education">
      <div className="first">
        <h1>Eduaction Details</h1>
        <button className="btn btn-primary">Add Education</button>
      </div>
      <Education></Education>
      <Education></Education>
    </div>
  );
}

export default UserEducation;
