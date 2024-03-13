import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import "./user.css";
import axios from "axios";
function UserExperience({ onSelectedTab }) {
  const [data, setData] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    if (localStorage.getItem("token") != null && data === null) {
      axios.get("/experienceDetails").then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.experience);
        }
      });
    }
  }, []);
  const [formData, setFormData] = useState({
    // JsId: insertId,
    jobTitle: "",
    comapanyName: "",
    startDate: "",
    endDate: "",
    experience: "",
    description: "",
  });

  return (
    <div className="education">
      <div className="first">
        <h1>Experience Details</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            onSelectedTab("addExperience");
          }}
        >
          Add Experience
        </button>
      </div>
      {data === null ? (
        <center>No data avalibale</center>
      ) : (
        <>
          {data.length === 0 ? (
            <center>Nothing</center>
          ) : (
            data.map((exp, index) => (
              <Experience key={index} exp={exp}></Experience>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default UserExperience;
