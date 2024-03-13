import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/admin-register", formData).then((res) => {
      if (res.data.Status === "Success") navigate("/login");
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

  return (
    <div className="container mt-5">
      <div
        className="card p-4"
        style={{ maxWidth: "575px", margin: "0 auto", background: "#333" }}
      >
        <center>
          <h3 className="text-white mb-4">Registration Form</h3>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <button type="submit" className="btn btn-primary w-100 mb-2">
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
