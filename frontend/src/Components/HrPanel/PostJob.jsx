import React, { useState } from "react";
import "./PostJob.css"; // Import custom CSS file
import axios from "axios";

const PostJob = ({ onSelectTab }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    experience: "",
    minimumEducation: "",
    city: "",
    role: "",
    salary: "",
    jobType: "",
    workLocation: "",
    lastDate: "", // Add new state for work location
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/job-post", formData).then((res) => {
      if (res.data.Status === "Success") {
        console.log("done");
        location.href = "/Hr";
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 w-full">
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-row" style={{ marginLeft: "100px" }}>
              {/* Existing input fields */}
              {/* Job Title */}
              <div className="form-group col-md-10">
                <label>Job Title:</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="form-control"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
              {/* Experience */}
              <div className="form-group col-md-10">
                <label>Experience:</label>
                <input
                  type="text"
                  name="experience"
                  className="form-control"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
              {/* City */}
              <div className="form-group col-md-10">
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              {/* Salary */}
              <div className="form-group col-md-10">
                <label>Salary:</label>
                <input
                  type="text"
                  name="salary"
                  className="form-control"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>
              {/* Job Description */}
              <div className="form-group col-md-10">
                <label>Job Description:</label>
                <textarea
                  name="jobDescription"
                  className="form-control"
                  value={formData.jobDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* Minimum Education */}
              <div className="form-group col-md-10">
                <label>Minimum Education:</label>
                <input
                  type="text"
                  name="minimumEducation"
                  className="form-control"
                  value={formData.minimumEducation}
                  onChange={handleChange}
                />
              </div>
              {/* Role */}
              <div className="form-group col-md-10">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  className="form-control"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
              {/* Job Type */}
              <div className="form-group col-md-10">
                <label>Job Type:</label>
                <select
                  name="jobType"
                  className="form-control"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option value="">Select Job Type</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="both">Both</option>
                </select>
              </div>
              {/* Work Location */}
              <div className="form-group col-md-10">
                <label>Work Location:</label>
                <select
                  name="workLocation"
                  className="form-control"
                  value={formData.workLocation}
                  onChange={handleChange}
                >
                  <option value="">Select Job Location</option>
                  <option value="wfh">Work from home</option>
                  <option value="office">Office work</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label>Last Date:</label>
                <input
                  type="date"
                  name="lastDate"
                  className="form-control"
                  value={formData.lastDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center mt-4">
                <button type="submit" className="btn btn-primary w-[30%]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
