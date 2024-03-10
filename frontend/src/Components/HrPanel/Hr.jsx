import { useContext, useEffect, useState } from "react";
import HrSidebar from "./HrSidebar";
import HrJobs from "./HrJobs";
import PostJob from "./PostJob";
import SearchCandidate from "./SearchCandidate";
import EditUserProfile from "./EditUserProfile";
import { AllFunction } from "../store/store";
import axios from "axios";
import AllApplicant from "./AllApplicant";
import "./hr.css";
export default function Hr() {
  const [selectedTab, setSelectedTab] = useState("jobs");
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };
  const [jobId, setJobId] = useState(0);
  const handleJobId = async (id) => {
    try {
      await setJobId(id);
    } catch (error) {
      console.log(error);
    }
  };
  const { handleAuth } = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      axios.get("/").then((res) => {
        if (res.data.Status === "Success") {
          handleAuth("hr", true);
        } else {
          handleAuth("hr", false);
        }
      });
    }
  });

  return (
    <div style={{ display: "flex" }}>
      <HrSidebar onSelectTab={handleTabSelect} />
      <div style={{ flex: 1 }} className="hrdiv">
        {/* Render the selected tab component */}
        {selectedTab === "jobs" && (
          <HrJobs onSelectTab={handleTabSelect} handleJobId={handleJobId} />
        )}
        {selectedTab === "search" && <SearchCandidate></SearchCandidate>}
        {selectedTab === "setting" && <EditUserProfile></EditUserProfile>}
        {selectedTab === "postJob" && <PostJob></PostJob>}
        {selectedTab === "allApplicant" && (
          <AllApplicant onSelectTab={handleTabSelect} id={jobId} />
        )}
      </div>
    </div>
  );
}
