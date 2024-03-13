import { useContext, useEffect, useState } from "react";
import Cards from "./cards/Cards";
import Filter from "./Filter";
import style from "./MainJobs.module.css";
import { AllFunction } from "../store/store";
import axios from "axios";
export default function MainJobs() {
  const array = [
    {
      companyName: "Bajaj Allianz General Insurance Company Limited",
      jobRole: "Software Engineer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 60000,
      maxSalary: 100000,
    },
  ];
  const { allJobs, handleAllJobs } = useContext(AllFunction);
  const [job, setJob] = useState(array);
  function applyFilter(newArray) {
    setJob(newArray);
  }
  useEffect(() => {
    if (allJobs === null) {
      axios.get("/allJobs").then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.jobs);
          handleAllJobs(res.data.jobs);
        }
      });
    }
  }, []);
  return (
    <div className={style.mainjobs}>
      <Filter jobs={array} applyFilter={applyFilter} />
      <Cards jobs={allJobs} />
    </div>
  );
}
