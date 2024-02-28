import React, { useState } from "react";
import "./PostJob.css"; // Import custom CSS file

const PostJob = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    experience: "",
    minimumEducation: "",
    city: "",
    role: "",
    salary: "",
    jobType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 w-full">
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-row" style={{ marginLeft: "100px" }}>
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
              <div className="form-group col-md-10">
                <label>Job Description:</label>
                <textarea
                  name="jobDescription"
                  className="form-control"
                  value={formData.jobDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
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
              <div className="form-group col-md-10">
                <label>Job Type:</label>
                <input
                  type="text"
                  name="jobType"
                  className="form-control"
                  value={formData.jobType}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center mt-3">
                <button type="submit" className="btn btn-primary">
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
