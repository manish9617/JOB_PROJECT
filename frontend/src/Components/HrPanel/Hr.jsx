import { useState } from "react";
import HrSidebar from "./HrSidebar";
import HrJobs from "./HrJobs";
import PostJob from "./PostJob";
import SearchCandidate from "./SearchCandidate";
import EditUserProfile from "./EditUserProfile";
export default function Hr() {
  const [selectedTab, setSelectedTab] = useState("jobs");
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div style={{ display: "flex" }}>
      <HrSidebar onSelectTab={handleTabSelect} />
      <div style={{ flex: 1 }}>
        {/* Render the selected tab component */}
        {selectedTab === "jobs" && <HrJobs onSelectTab={handleTabSelect} />}
        {selectedTab === "search" && (
          <>
            <SearchCandidate></SearchCandidate>
          </>
        )}
        {selectedTab === "setting" && <EditUserProfile></EditUserProfile>}
        {selectedTab === "postJob" && <PostJob></PostJob>}
      </div>
    </div>
  );
}
