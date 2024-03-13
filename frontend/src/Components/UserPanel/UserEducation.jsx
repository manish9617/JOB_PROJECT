import React, { useEffect, useState } from "react";
import Education from "./Education";
import "./user.css";
import axios from "axios";
function UserEducation({ onSelectedTab }) {
  const [data, setData] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    if (localStorage.getItem("token") != null && data === null) {
      axios.get("/educationDetails").then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.education);
        }
      });
    }
  }, []);
  return (
    <div className="education">
      <div className="first">
        <h1>Eduaction Details</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("Clicked Add Education button");
            onSelectedTab("addEducation");
          }}
        >
          Add Education
        </button>
      </div>
      {data === null ? (
        <center>Loading</center>
      ) : (
        <>
          {data.length === 0 ? (
            <center>Nothing</center>
          ) : (
            data.map((educa, index) => (
              <Education key={index} education={educa}></Education>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default UserEducation;
