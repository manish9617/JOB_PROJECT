import PostedJobs from "./PostedJobs";
import { useContext, useEffect, useState } from "react";
import { AllFunction } from "../store/store";
import axios from "axios";
import Jobs from "./Jobs";
export default function HrJobs({ onSelectTab, handleJobId }) {
  const { hrData, handleHrData, hrPostjobData, handleHrPostJobData } =
    useContext(AllFunction);
  // onClickHandler should be a function that returns a function
  const onClickHandler = (tab) => () => {
    onSelectTab(tab);
  };
  useEffect(() => {
    if (localStorage.getItem("info") != null && hrData.HrName === "") {
      const storedData = JSON.parse(localStorage.getItem("info"));
      handleHrData(storedData);
    }
  }, []);
  const [total, setTotal] = useState(
    hrPostjobData === null ? 0 : hrPostjobData.length
  );
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("token") != null && hrPostjobData === null) {
        try {
          const res = await axios.get("/hr-total-post-job");
          handleHrPostJobData(res.data.jobs);
          setTotal(res.data.jobs.length);
        } catch (error) {
          console.error("Error fetching HR total post job data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ms-5 me-5 p-5">
      <div className="flex justify-content-between   font-bold text-xl ">
        <p style={{ height: "40px" }}> All Posted Jobs ({total})</p>
        <button
          style={{
            background: "rgb(31, 130, 104)",
            width: "180px",
            height: "30px",
            borderRadius: "10px",
          }}
          // Pass a function reference to onClick
          onClick={onClickHandler("postJob")}
        >
          Post a new job
        </button>
      </div>
      <Jobs onSelectTab={onSelectTab} handleJobId={handleJobId} />
    </div>
  );
}
