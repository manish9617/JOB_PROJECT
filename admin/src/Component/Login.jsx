import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
export default function Login() {
  const email = useRef();
  const password = useRef();
  axios.defaults.withCredentials = true;
  function handleForm(event) {
    event.preventDefault();
    const formData = {
      email: email.current.value,
      password: password.current.value,
    };
    axios.post("/admin-login", formData).then((res) => {
      if (res.status === 200 && res.data.Status === "Success") {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      } else {
        alert(res.data.Error || "Something went wrong");
      }
      // Clear input fields after request completes
      email.current.value = "";
      password.current.value = "";
    });
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="card text-white bg-dark p-4 col-12 col-md-8 col-lg-6">
          <div className="text-center text-2xl pb-3">Sign In</div>
          <div className="d-flex justify-content-center gap-6 pb-3">
            <FcGoogle size={40} />
            <BsLinkedin size={40} />
          </div>
          <div className="d-flex align-items-center justify-content-center pb-3">
            <div className="border-bottom border-gray-400 w-25"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="border-bottom border-gray-400 w-25"></div>
          </div>
          <div className="card-body">
            <form onSubmit={handleForm}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  ref={email}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={password}
                />
                <small>
                  <Link to="/" className="text-decoration-none">
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
            <p className="mt-2 text-center">
              Don't have an account?
              <Link to="/register" className="text-decoration-none ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
