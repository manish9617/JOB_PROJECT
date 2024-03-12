import React from "react";
import UserEducation from "./UserEducation";
import UserExperience from "./UserExperience";
import UserProfile from "./UserProfile";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";

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
    </div>
  );
}

export default UserDetils;
