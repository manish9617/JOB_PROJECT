import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import axios from "axios";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { AllFunction } from "./Components/store/store";

function Header() {
  const navRef = useRef();
  const { userAuth, hrAuth } = useContext(AllFunction);
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        // window.location.href = "/";
        location.replace("/");
      })
      .catch((err) => console.log(err));
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <Link to={hrAuth ? "Hr" : "/"}>
          <div className="  mx-auto flex justify-center items-center bottom-0">
            <h3>
              <img
                src="/public/Mainicon.png"
                className=" h-[200px] w-[250px] left-0"
                alt="Main Icon"
              />
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex justify-end">
        <nav ref={navRef}>
          {!hrAuth && (
            <Link
              to="AllJobs"
              className="bg-black text-white py-3 rounded-md text-xl font-bold px-8 mx-5"
            >
              Search Job
            </Link>
          )}
          <>
            {userAuth || hrAuth ? (
              <button
                className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="login">
                <button className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold">
                  Candidate Login
                </button>
              </Link>
            )}
          </>
          <>
            {!userAuth && !hrAuth && (
              <Link to="companylogin">
                <button className="bg-white text-black px-6 py-3 rounded-md text-xl font-bold">
                  Company Login
                </button>
              </Link>
            )}
          </>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
