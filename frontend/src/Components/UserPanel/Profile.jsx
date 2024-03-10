import React, { useEffect, useState } from "react";
import UserSideBar from "./UserSideBar";
import UserDetils from "./UserDetils";

function Profile() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const onSelectedTab = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div className="flex">
        <div>
          <UserSideBar onSelectedTab={onSelectedTab}></UserSideBar>
        </div>
        <div className="absolute mx-[20%] w-[70%] overflow-auto h-[80%]">
          <UserDetils tab={selectedTab}></UserDetils>
        </div>
      </div>
    </>
  );
}

export default Profile;
