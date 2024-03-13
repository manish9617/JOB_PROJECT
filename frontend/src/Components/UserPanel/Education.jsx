import React, { useState } from "react";
import "./education.css";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
function Education({ education }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    degreeName: education.DegreeName,
    instituteName: education.InstituteName,
    startDate: education.StartDate,
    completionDate: education.CompletionDate,
    percentage: education.Percentage,
    id: education.EduId,
  });

  const handlePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/update-education", formData).then((res) => {
      if (res.data.Status === "Success") {
        location.reload(true);
      }
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
    <div className="education1">
      <div className="d-flex justify-content-between pe-3">
        <h1 className="fs-5 fw-bold">{education.DegreeName}</h1>
        <button onClick={handlePopUp}>
          <FaRegEdit />
        </button>
      </div>
      <div className="row">
        <div className="col-3">Institute Name</div>
        <div className="col-8">{education.InstituteName}</div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">
          {new Date(education.StartDate).toLocaleDateString()} to{" "}
          {new Date(education.CompletionDate).toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <div className="col-3">Percentage</div>
        <div className="col-8">{education.Percentage}</div>
      </div>
      <div className="row">
        <div className="col-3">Certificate</div>
        <div className="col-8">View</div>
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
                    <label htmlFor="degreeName" className="form-label">
                      Degree Name / Certificate Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="degreeName"
                      name="degreeName"
                      defaultValue={formData.degreeName}
                      placeholder="Degree / Certificate Name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="instituteName" className="form-label">
                      Institute Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="instituteName"
                      name="instituteName"
                      defaultValue={formData.instituteName}
                      placeholder="Institute Name"
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
                      <label htmlFor="completionDate" className="form-label">
                        Completion Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="completionDate"
                        name="completionDate"
                        defaultValue={formData.completionDate}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="percentage" className="form-label">
                      Percentage
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="percentage"
                      name="percentage"
                      defaultValue={formData.percentage}
                      placeholder="Percentage"
                      required
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

export default Education;
