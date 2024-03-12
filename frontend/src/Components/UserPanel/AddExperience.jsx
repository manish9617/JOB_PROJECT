import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AllFunction } from "../store/store";

function AddExperience({ onSelectedTab }) {
  const navigate = useNavigate();
  const { insertId } = useContext(AllFunction);
  const [formData, setFormData] = useState({
    JsId: insertId,
    jobTitle: "",
    comapanyName: "",
    startDate: "",
    endDate: "",
    experience: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/postdata-experience-user", formData).then((res) => {
      if (res.data.Status == "Success") navigate("/login");
      else alert(res.data.Error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };
  return (
    <div className="container  justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "575px", background: "#333" }}>
        <center>
          <h3 className="text-white mb-4">Registration Form</h3>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="jobTitle" className="form-label text-white">
                Job Role
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Role"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="companyName" className="form-label text-white">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="startDate" className="form-label text-white">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="endDate" className="form-label text-white">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="adhar" className="form-label text-white">
                Experience
              </label>
              <input
                type="number"
                className="form-control"
                id="experience"
                name="experience"
                placeholder="How many years of experience have you had?"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="description" className="form-label text-white">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-dark w-100 mb-2 me-2 bg-primary"
            >
              REGISTER
            </button>
            <button
              type="cancel"
              className="btn btn-dark w-100 mb-2 ms-2 bg-primary"
              onClick={() => onSelectedTab("experience")}
            >
              CANCLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExperience;
