// CompanyProfile.js

import React, { useContext } from "react";
import JobHeader from "./JobHeader";
import JobDetail from "./JobDetail";
import { AllFunction } from "../../store/store";
const JobProfile = () => {
  const { jobId } = useContext(AllFunction);
  console.log(jobId);
  return (
    <div>
      <JobHeader></JobHeader>
      <JobDetail></JobDetail>
    </div>
  );
};

export default JobProfile;
