import { useState } from "react";
import style from "./Card.module.css";
import { AiFillAmazonSquare } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
export default function Card({ obj }) {
  const companyName = obj.companyName;
  const jobRole = obj.jobRole;
  const jobType = obj.jobType;
  const jobTIme = obj.jobTime;
  const textRequire = obj.textRequire;
  //console.log(obj.minSalary, obj.maxSalary);
  const minimum = obj.minSalary;
  const maximum = obj.maxSalary;
  // const [urgently, setUrgently] = useState(true);
  // const [fastHrReply, setFastHr] = useState(true);
  const [wfh, setWFH] = useState(true);
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
        {wfh ? <MdHomeFilled size={20} /> : <IoIosBusiness size={20} />}
        <p className="ps-2 mb-0 fs-6">{jobType}</p>
      </div>
      <div className="d-flex align-items-center ms-1">
        <FaWallet className="me-2 mt-1" />
        <p className="mb-0 mt-1">
          ₹{minimum}- ₹{maximum}
        </p>
      </div>
      <div className={style.time}>
        <p className="me-2 ms-1">{jobTIme}</p>
        <p className="ms-2">{textRequire}</p>
      </div>
      <div className={style.extra}>
        <p className="me-1">Urgently hiring</p>
        <p className="ms-2">Fast HR reply</p>
      </div>
    </div>
  );
}
