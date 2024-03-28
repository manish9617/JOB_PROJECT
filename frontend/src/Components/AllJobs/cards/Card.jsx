import { useState, useContext } from "react";
import style from "./Card.module.css";
import { AiFillAmazonSquare } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AllFunction } from "../../store/store";
export default function Card({ obj }) {
  const { jobId, handleApplyJob } = useContext(AllFunction);
  const companyName = obj.CompName;
  const jobRole = obj.JobTitle;
  const jobType = obj.workLocation;
  const jobTIme = obj.JobType;
  const minimum = obj.Salary;
  // const handleApply = async () => {
  //   handleApplyJob(obj.JobId);
  //   window.location.href = "/AllJobs/apply";
  // };
  return (
    <div className={style.card}>
      <div className={`d-flex justify-content-between ${style.header}`}>
        <div className="flex space-x-2">
          <div className={style.icons}>
            <AiFillAmazonSquare size={40} />
          </div>

          <div className={style.company}>
            <h1 className="fs-5">{jobRole}</h1>
            <p className="fs-6 pt-1">{companyName}</p>
          </div>
        </div>
        <div>
          <Link to="apply">
            <button className={style.closeButton}>
              <SlArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center mt-2 ms-1">
        <MdHomeFilled size={20} />
        <p className="ps-2 mb-0 fs-6">{jobType}</p>
      </div>
      <div className="d-flex align-items-center ms-1">
        <FaWallet className="me-2 mt-1" />
        <p className="mb-0 mt-1">₹{minimum}</p>
      </div>
      <div className={style.time}>
        <p className="me-2 ms-1">{jobTIme}</p>
        <p className="ms-2">Test required</p>
      </div>
      <div className={style.extra}>
        <p className="me-1">Urgently hiring</p>
        <p className="ms-2">Fast HR reply</p>
      </div>
    </div>
  );
}
