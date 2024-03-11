import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AllFunction } from "../store/store";

function AddEducation() {
  const navigate = useNavigate();
  const { insertId } = useContext(AllFunction);
  const [formData, setFormData] = useState({
    degreeName: "",
    instituteName: "",
    startDate: "",
    completionDate: "",
    percentage: "",
  });
  const [certificate, setCertificate] = useState(null);
  const handleSubmit = (e) => {
    console.log(insertId);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("DegreeName", formData.degreeName);
    formdata.append("InstituteName", formData.instituteName);
    formdata.append("StartDate", formData.startDate);
    formdata.append(".CompletionDate", formData.completionDate);
    formdata.append("Percentage", formData.percentage);
    formdata.append("DegreeFile", certificate);
    formdata.append("JsId", insertId);
    axios
      .post("/postdata-education-user", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.Status == "Success") navigate("/experience");
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
    setCertificate(e.target.files[0]);
  };
  return (
    <div className="container  justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "575px", background: "#333" }}>
        <center>
          <h3 className="text-white mb-4">Education details Form</h3>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="degreeName" className="form-label text-white">
                Degree Name / Certificate Name
              </label>
              <input
                type="text"
                className="form-control"
                id="degreeName"
                name="degreeName"
                placeholder="Degree / Certificate Name"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="instituteName" className="form-label text-white">
                Institute Name
              </label>
              <input
                type="text"
                className="form-control"
                id="instituteName"
                name="instituteName"
                placeholder="Institute Name"
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
              <label htmlFor="completionDate" className="form-label text-white">
                Completion Date
              </label>
              <input
                type="date"
                className="form-control"
                id="completionDate"
                name="completionDate"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="certificate" className="form-label text-white">
                Upload Certificate / Degree
              </label>
              <input
                type="file"
                className="form-control"
                id="certificate"
                name="certificate"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="percentage" className="form-label text-white">
                Percentage
              </label>
              <input
                type="number"
                className="form-control"
                id="percentage"
                name="percentage"
                placeholder="Percentage"
                required
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
              className="btn btn-dark w-100 mb-2 ms-2 bg-primary"
              onClick={() => {
                navigate("/experience");
              }}
            >
              SKIP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEducation;
