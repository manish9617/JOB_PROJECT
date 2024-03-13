import React, { useState } from "react";
import "./experience.css";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
function Experience({ exp }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: exp.JobTitle,
    comapanyName: exp.CompanyName,
    startDate: exp.StartDate,
    endDate: exp.EndDate,
    description: exp.Description,
    id: exp.ExpId,
  });

  const handlePopUp = () => {
    setIsOpen(!isOpen);
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    axios.post("/update-experience", formData).then((res) => {
      if (res.data.Status === "Success") location.reload(true);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="experience1">
      <div className="d-flex justify-content-between pe-3">
        <h1 className="fs-5  fw-bold">{exp.JobTitle}</h1>
        <button onClick={handlePopUp}>
          <FaRegEdit />
        </button>
      </div>

      <div className="row">
        <div className="col-3">Comapny Name</div>
        <div className="col-8">{exp.CompanyName}</div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">
          {new Date(exp.StartDate).toLocaleDateString()} to{" "}
          {new Date(exp.EndDate).toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <div className="col-3">Description</div>
        <div className="col-8">{exp.Description}</div>
      </div>

      {isOpen && (
        <div className="popup-wrapper mt-5">
          <div className="popup" style={{ maxHeight: "80vh" }}>
            <button className="close-btn" onClick={handlePopUp}>
              X
            </button>
            <div className="edit1">
              <div className="col-lg-8 w-full">
                <form className="jobform" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">
                      Job Role
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      name="jobTitle"
                      defaultValue={formData.jobTitle}
                      placeholder="Job Role"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      defaultValue={formData.comapanyName}
                      placeholder="Company Name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        defaultValue={formData.startDate}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        defaultValue={formData.endDate}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      defaultValue={formData.description}
                      placeholder="Description"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex">
                    <button
                      type="submit"
                      className="btn btn-dark w-100 mb-2 me-2 bg-primary"
                      onClick={handleSubmit}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
