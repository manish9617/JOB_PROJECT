import React, { useEffect, useState, useContext } from "react";
import UserSideBar from "./UserSideBar";
import UserDetils from "./UserDetils";
import "./user.css";
import { AllFunction } from "../store/store";
function Profile() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const onSelectedTab = (tab) => {
    setSelectedTab(tab);
  };
  const { handleUserdata, userData } = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("info") != null && userData === null) {
      const data = JSON.parse(localStorage.getItem("info"));
      handleUserdata(data);
    }
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <UserSideBar onSelectedTab={onSelectedTab}></UserSideBar>
        </div>
        <div style={{ flex: 1 }} className="userdiv">
          <UserDetils
            tab={selectedTab}
            onSelectedTab={onSelectedTab}
          ></UserDetils>
        </div>
      </div>
    </>
  );
}

export default Profile;
