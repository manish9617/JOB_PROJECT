import React from "react";
import UserEducation from "./UserEducation";
import UserExperience from "./UserExperience";
import UserProfile from "./UserProfile";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
import AllApplication from "./AllApplication";

function UserDetils({ tab, onSelectedTab }) {
  return (
    <div>
      {tab === "profile" && <UserProfile></UserProfile>}
      {tab === "education" && (
        <UserEducation onSelectedTab={onSelectedTab}></UserEducation>
      )}
      {tab === "experience" && (
        <UserExperience onSelectedTab={onSelectedTab}></UserExperience>
      )}
      {tab === "addEducation" && (
        <AddEducation onSelectedTab={onSelectedTab}></AddEducation>
      )}
      {tab === "addExperience" && (
        <AddExperience onSelectedTab={onSelectedTab}></AddExperience>
      )}
      {tab === "allApllcation" && (
        <AllApplication onSelectedTab={onSelectedTab}></AllApplication>
      )}
    </div>
  );
}

export default UserDetils;
