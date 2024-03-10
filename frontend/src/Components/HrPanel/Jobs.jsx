import React, { useContext } from "react";
import PostedJobs from "./PostedJobs";
import { AllFunction } from "../store/store";

function Jobs({ onSelectTab, handleJobId }) {
  const { hrPostjobData } = useContext(AllFunction);
  return (
    <div>
      {hrPostjobData === null ? (
        <>fetching data</>
      ) : (
        <>
          {hrPostjobData.length === 0 ? (
            <h1>No jobs posted yet</h1>
          ) : (
            hrPostjobData.map((job, index) => (
              <PostedJobs
                handleJobId={handleJobId}
                key={index}
                job={job}
                onSelectTab={onSelectTab}
              />
            ))
          )}
        </>
      )}
    </div>
  );
}

export default Jobs;
