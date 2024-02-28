import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const users = [
    { id: "hr1@gmail.com", password: "123456" },
    { id: "hr2@gmail.com", password: "123456" },
  ];
  const navigate = useNavigate();
  function handleForm(event) {
    event.preventDefault();
    const e = email.current.value;
    const p = password.current.value;
    const user = users.find((u) => u.id === e && u.password === p);
    if (user) {
      navigate("/profile");
    } else {
      alert("Enter a valid email and password");
    }
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card text-white bg-dark p-4 w-full md:w-3/5 lg:w-2/5 xl:w-1/3">
        <div className="text-center text-2xl mb-6">Sign In</div>
        <div className="flex justify-center gap-6 mb-6">
          <FcGoogle size={40} />
          <BsLinkedin size={40} />
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="border-b border-gray-400 w-1/3"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="border-b border-gray-400 w-1/3"></div>
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
              className="btn btn-dark w-full mb-2 bg-primary"
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
  );
}
