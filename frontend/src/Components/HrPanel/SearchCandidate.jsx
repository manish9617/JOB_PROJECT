// SearchCandidate.js

import React, { useState } from "react";
import "./SearchCandidate.css";

const SearchCandidate = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    searchType: "",
    currentCity: "",
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    educationLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="search-form">
        <center className="mb-2">
          <h2 className="text-xl mb-1">Search Candidate</h2>
          <hr style={{ width: "200px" }} />
        </center>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Searching for:</label>
            <div>
              <label className="radio-inline mr-2">
                <input
                  type="radio"
                  name="searchType"
                  value="Freshers"
                  onChange={handleChange}
                />{" "}
                Freshers
              </label>
              <label className="radio-inline mr-2">
                <input
                  type="radio"
                  name="searchType"
                  value="Experienced"
                  onChange={handleChange}
                />{" "}
                Experienced
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="searchType"
                  value=""
                  onChange={handleChange}
                />{" "}
                Any
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Current City:</label>
            <input
              type="text"
              name="currentCity"
              className="form-control"
              value={formData.currentCity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Experience:</label>
            <div className="d-flex">
              <input
                type="text"
                name="minExperience"
                className="form-control mr-2"
                placeholder="Minimum"
                value={formData.minExperience}
                onChange={handleChange}
              />
              <input
                type="text"
                name="maxExperience"
                className="form-control"
                placeholder="Maximum"
                value={formData.maxExperience}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <div className="d-flex">
              <input
                type="text"
                name="minSalary"
                className="form-control mr-2"
                placeholder="Minimum"
                value={formData.minSalary}
                onChange={handleChange}
              />
              <input
                type="text"
                name="maxSalary"
                className="form-control"
                placeholder="Maximum"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Highest Education:</label>
            <select
              name="educationLevel"
              className="form-control"
              value={formData.educationLevel}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="10th">10th Pass</option>
              <option value="12th">12th Pass</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default SearchCandidate;
