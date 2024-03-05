// Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CompanyRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hrname: "",
    contactNumber: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    logo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Save the user data to your database or state

    // After saving data, navigate to the login page
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
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
              <label className="form-label text-white">Company Name</label>
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
              <label className="form-label text-white">Company Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Street Address"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-white">Name</label>
              <input
                type="text"
                className="form-control"
                id="hrname"
                name="hrname"
                placeholder="Name"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="col">
                <label className="form-label text-white">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleInputChange}
                />
              </div> */}
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-white">Aadhar Number</label>
              <input
                type="number"
                className="form-control"
                id="number"
                name="aadhar"
                placeholder="Aadhar number"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-white">Email</label>
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
              <label className="form-label text-white">Contact Number</label>
              <input
                type="number"
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                placeholder="Contact Number"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-white">
                Upload Company Logo
              </label>
              <input
                type="file"
                className="form-control"
                id="logo"
                name="logo"
                placeholder="Upload Company logo"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label text-white">Password</label>
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

export default CompanyRegister;
