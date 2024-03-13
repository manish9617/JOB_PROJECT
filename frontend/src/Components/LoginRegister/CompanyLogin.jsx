import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AllFunction } from "../store/store";
export default function CompanyLogin() {
  const navigate = useNavigate();
  const { hrData, handleHrData } = useContext(AllFunction);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    axios.post("/login-hr", { email, password }).then((res) => {
      if (res.data.Status === "Success") {
        const { HrID, HrPwd, companyLogo, AdharId, ...rest } = res.data.info;
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("info", JSON.stringify(rest));
        handleHrData(JSON.parse(localStorage.getItem("info")));
        // console.log("local data", JSON.parse(localStorage.getItem("info")));
        // console.log("hrData", hrData);
        navigate("/Hr");
      } else {
        alert(res.data.Error);
      }
    });
    e.target.elements.email.value = "";
    e.target.elements.password.value = "";
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "475px" }}
    >
      <div className="card text-white bg-dark mb-3 p-4">
        <h1 className="p-2 fs-4 text-center">Log in Here</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
              <small>
                <Link to="#" className="text-decoration-none d-block pt-2">
                  Forgot password?
                </Link>
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 mb-2 bg-primary"
            >
              LOGIN
            </button>
          </form>
          <p className="mt-2 fs-5 text-center">
            Don't have an account?
            <Link to="/companyregister" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
