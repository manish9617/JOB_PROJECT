import { AllFunction } from "../store/store";
import styles from "./UserSidebar.module.css";
import { useContext, useRef } from "react";
import axios from "axios";
const UserSideBar = ({ onSelectedTab }) => {
  const { userAuth, hrAuth } = useContext(AllFunction);
  axios.defaults.withCredentials = true;

  const handleLogout = (e) => {
    axios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        // window.location.href = "/";
        location.replace("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={`${styles.sidebar} `}>
      <div className={styles["sidebar-toggle"]}></div>
      <ul className={styles["sidebar-menu"]}>
        <li
          onClick={() => {
            onSelectedTab("profile");
          }}
          className={styles.sidename}
        >
          Profile
        </li>
        <div className={styles.line}></div>

        <br />
        <li
          onClick={() => {
            onSelectedTab("education");
          }}
          className={styles.sidename}
        >
          Educations details
        </li>

        <div className={styles.line}></div>
        <br />
        <li
          onClick={() => {
            onSelectedTab("experience");
          }}
          className={styles.sidename}
        >
          Experience details
        </li>
        <div className={styles.line}></div>
        <br />
        <li
          onClick={() => {
            onSelectedTab("allApllcation");
          }}
          className={styles.sidename}
        >
          All application
        </li>
        <div className={styles.line}></div>
      </ul>
      <br />

      {userAuth && (
        <button className={styles.btn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default UserSideBar;
