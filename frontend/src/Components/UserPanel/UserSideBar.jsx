import styles from "./UserSidebar.module.css";
const UserSideBar = ({ onSelectedTab }) => {
  return (
    <div className={`${styles.sidebar} `}>
      <div className={styles["sidebar-toggle"]}></div>
      <ul className={styles["sidebar-menu"]}>
        <li
          onClick={() => {
            onSelectedTab("profile");
          }}
        >
          Profile
        </li>
        {/* <li
          onClick={() => {
            onSelectedTab("skills");
          }}
        >
          Skills
        </li> */}
        <li
          onClick={() => {
            onSelectedTab("education");
          }}
        >
          Educations details
        </li>
        <li
          onClick={() => {
            onSelectedTab("experience");
          }}
        >
          Experience details
        </li>
      </ul>
    </div>
  );
};

export default UserSideBar;
