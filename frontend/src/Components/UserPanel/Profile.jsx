import React, { useEffect, useState } from "react";
import UserSideBar from "./UserSideBar";
import UserDetils from "./UserDetils";
import "./user.css";
function Profile() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const onSelectedTab = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <UserSideBar onSelectedTab={onSelectedTab}></UserSideBar>
        </div>
        <div style={{ flex: 1 }} className="userdiv">
          <UserDetils tab={selectedTab}></UserDetils>
        </div>
      </div>
    </>
  );
}

export default Profile;
