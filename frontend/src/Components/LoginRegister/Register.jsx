import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AllFunction } from "../store/store";
const Register = () => {
  const navigate = useNavigate();
  const { insertId, handleInsertId } = useContext(AllFunction);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    adhar: "",
    experience: "",
  });
  const [resume, setResume] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("firstName", formData.firstName);
    formdata.append("lastName", formData.lastName);
    formdata.append("phone", formData.phone);
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    formdata.append("dob", formData.dob);
    formdata.append("gender", formData.gender);
    formdata.append("adhar", formData.adhar);
    formdata.append("resume", resume);
    formdata.append("experience", formData.experience);
    await axios
      .post("/postdata-user", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.Status == "Success") {
          // console.log(res.data.id);
          handleInsertId(res.data.id);
          // console.log(insertId);
          navigate("/education");
        } else alert(res.data.Error);
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
              <label htmlFor="firstName" className="form-label text-white">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label text-white">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="phone" className="form-label text-white">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Contact Number"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email" className="form-label text-white">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="dob" className="form-label text-white">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="gender" className="form-label text-white">
                Gender
              </label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="adhar" className="form-label text-white">
                Adhar Number
              </label>
              <input
                type="number"
                className="form-control"
                id="adhar"
                name="adhar"
                placeholder="Adhar Number"
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
              <label htmlFor="resume" className="form-label text-white">
                Upload Resume
              </label>
              <input
                type="file"
                className="form-control"
                id="resume"
                name="resume"
                placeholder="Upload Resume"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-2 bg-primary">
            REGISTER
          </button>
        </form>

        <p className="mt-2 text-white">
          Already have an account?
          <Link to="/login" className="text-decoration-none text-white">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
