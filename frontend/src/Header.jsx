import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const navRef = useRef();

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
            className="bg-black text-white  py-3 rounded-md text-xl font-bold px-8 mx-5"
          >
            Search Job
          </Link>

          <Link to="login">
            <button className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold">
              For Candidate
            </button>
          </Link>

          <Link to="companylogin">
            <button className="bg-white text-black px-6 py-3 rounded-md text-xl font-bold">
              For Company
            </button>
          </Link>

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
