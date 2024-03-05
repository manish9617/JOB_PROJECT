import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AllFunction } from "./Components/store/store";

function Header() {
  const navRef = useRef();
  const { userAuth } = useContext(AllFunction);
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="overflow-auto">
      <div className="">
        <Link to="/">
          <h3>LOGO</h3>
        </Link>
      </div>
      <div className="flex justify-end">
        <nav ref={navRef}>
          <Link
            to="AllJobs"
            className="bg-black text-white py-3 rounded-md text-xl font-bold px-8 mx-5"
          >
            Search Job
          </Link>
          <>
            {userAuth ? (
              <button
                className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="login">
                <button className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold">
                  For Candidate
                </button>
              </Link>
            )}
          </>
          <>
            {!userAuth && (
              <Link to="companylogin">
                <button className="bg-white text-black px-6 py-3 rounded-md text-xl font-bold">
                  For Company
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
