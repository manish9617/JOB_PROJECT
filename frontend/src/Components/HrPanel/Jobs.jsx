import React, { useContext } from "react";
import PostedJobs from "./PostedJobs";
import { AllFunction } from "../store/store";

function Jobs() {
  const { hrPostjobData } = useContext(AllFunction);
  return (
    <div>
      {/* if(hrPostjobData.length===0){<h1>No jobs posted yet</h1>}else
      {<PostedJobs></PostedJobs>} */}
      {hrPostjobData === null ? (
        <>fetching data</>
      ) : (
        <>
          {hrPostjobData.length === 0 ? (
            <h1>No jobs posted yet</h1>
          ) : (
            hrPostjobData.map((job, index) => (
              <PostedJobs key={index} job={job}></PostedJobs>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default Jobs;
