import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import axios from "axios";
import { Link } from "react-router-dom";

import style from "./Header.module.css";

function Navbar() {
  const navRef = useRef();
  const userAuth = false;
  const hrAuth = false;
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
    <header className={style.nav}>
      <div>
        <Link to={hrAuth ? "/hr" : "/"}>
          <div className={style.logo}>
            <h3>
              <img
                src="/Mainicon.png"
                className=" h-[200px] w-[250px] "
                alt="Main Icon"
              />
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex justify-end mr-0">
        <nav ref={navRef}>
          {!hrAuth && (
            <Link to="AllJobs" className={style.btn}>
              Available Job
            </Link>
          )}
          {userAuth && (
            <Link to="/user">
              <button className={style.btn}>Profile</button>
            </Link>
          )}
          <>
            {userAuth || hrAuth ? (
              <button className={style.btn} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="login">
                <button className={style.btn}>Candidate Login</button>
              </Link>
            )}
          </>
          <>
            {!userAuth && !hrAuth && (
              <Link to="companylogin">
                <button className={style.btn}>Company Login</button>
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

export default Navbar;
