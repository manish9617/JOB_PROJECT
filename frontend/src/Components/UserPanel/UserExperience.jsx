import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import "./user.css";
import axios from "axios";
function UserExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    if (localStorage.getItem("token") != null && data === null) {
      axios.get("/experienceDetails").then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.exp);
        }
      });
    }
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const [formData, setFormData] = useState({
    // JsId: insertId,
    jobTitle: "",
    comapanyName: "",
    startDate: "",
    endDate: "",
    experience: "",
    description: "",
  });
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
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="education">
      <div className="first">
        <h1>Experience Details</h1>
        <button className="btn btn-primary" onClick={handleOpen}>
          Add Experience
        </button>
      </div>
      <Experience></Experience>
      <Experience></Experience>
      {isOpen && (
        <div className="popup-wrapper mt-4">
          <div className="popup">
            <button className="close-btn" onClick={handleClose}></button>
            <div className="edit1">
              <div className="col-lg-8 w-full">
                <form onSubmit={() => {}}>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="jobTitle"
                        className="form-label text-white"
                      >
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
                      <label
                        htmlFor="companyName"
                        className="form-label text-white"
                      >
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
                      <label
                        htmlFor="startDate"
                        className="form-label text-white"
                      >
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
                      <label
                        htmlFor="endDate"
                        className="form-label text-white"
                      >
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
                      <label
                        htmlFor="description"
                        className="form-label text-white"
                      >
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
                      className="btn btn-dark w-100 mb-2 ms-2 bg-primary"
                      onClick={handleClose}
                    >
                      SKIP
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

export default UserExperience;
