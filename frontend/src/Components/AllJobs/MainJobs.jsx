import { useState } from "react";
import Cards from "./cards/Cards";
import Filter from "./Filter";
import style from "./MainJobs.module.css";
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
    {
      companyName: "Google LLC",
      jobRole: "Intern",
      jobType: "Office",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 30000,
      maxSalary: 40000,
    },
    {
      companyName: "Apple Inc.",
      jobRole: "Full Stack Web Developer",
      jobType: "Hybrid",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
    {
      companyName: "Microsoft Corporation",
      jobRole: "Backend Developer",
      jobType: "Office",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 65000,
      maxSalary: 110000,
    },
    {
      companyName: "Amazon.com Inc.",
      jobRole: "Java Fullstack Developer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 75000,
      maxSalary: 130000,
    },
    {
      companyName: "Facebook Inc.",
      jobRole: "Software Engineer",
      jobType: "Office",
      jobTime: "Part time",
      textRequire: "Test required",
      minSalary: 55000,
      maxSalary: 95000,
    },
    {
      companyName: "Netflix Inc.",
      jobRole: "Backend Developer",
      jobType: "Hybrid",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 68000,
      maxSalary: 115000,
    },
    {
      companyName: "Tesla Inc.",
      jobRole: "Java Fullstack Developer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
    {
      companyName: "Johnson & Johnson",
      jobRole: "Intern",
      jobType: "Office",
      jobTime: "Part time",
      textRequire: "No test required",
      minSalary: 35000,
      maxSalary: 45000,
    },
    {
      companyName: "UPS Inc.",
      jobRole: "Software Engineer",
      jobType: "Office",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 60000,
      maxSalary: 100000,
    },
    {
      companyName: "IBM Corporation",
      jobRole: "Full Stack Web Developer",
      jobType: "Hybrid",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
    {
      companyName: "Cisco Systems Inc.",
      jobRole: "Software Engineer",
      jobType: "Office",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 65000,
      maxSalary: 110000,
    },
    {
      companyName: "Intel Corporation",
      jobRole: "Backend Developer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 68000,
      maxSalary: 115000,
    },
    {
      companyName: "Salesforce.com Inc.",
      jobRole: "Java Fullstack Developer",
      jobType: "Hybrid",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 75000,
      maxSalary: 130000,
    },
    {
      companyName: "Oracle Corporation",
      jobRole: "Full Stack Web Developer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
    {
      companyName: "HP Inc.",
      jobRole: "Software Engineer",
      jobType: "Office",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 60000,
      maxSalary: 100000,
    },
    {
      companyName: "Sony Corporation",
      jobRole: "Intern",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 35000,
      maxSalary: 45000,
    },
    {
      companyName: "Samsung Electronics Co. Ltd.",
      jobRole: "Software Engineer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 60000,
      maxSalary: 100000,
    },
    {
      companyName: "Dell Technologies Inc.",
      jobRole: "Software Engineer",
      jobType: "Hybrid",
      jobTime: "Full time",
      textRequire: "Test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
    {
      companyName: "Adobe Inc.",
      jobRole: "Full Stack Web Developer",
      jobType: "Work from Home",
      jobTime: "Full time",
      textRequire: "No test required",
      minSalary: 70000,
      maxSalary: 120000,
    },
  ];

  const [job, setJob] = useState(array);
  function applyFilter(newArray) {
    setJob(newArray);
  }
  return (
    <div className={style.mainjobs}>
      <Filter jobs={array} applyFilter={applyFilter} />
      <Cards jobs={job} />
    </div>
  );
}
