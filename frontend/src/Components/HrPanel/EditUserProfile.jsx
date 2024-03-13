import { AllFunction } from "../store/store";
import Edit from "./Edit";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function EditUserProfile() {
  const { hrData } = useContext(AllFunction);
  const [name, setName] = useState(hrData.HrName);
  const [email, setEmail] = useState(hrData.HrEmail);
  const [address, setAddress] = useState(hrData.CompADD);
  const [phone, setPhone] = useState(hrData.CompPhone);
  const [company, setCompany] = useState(hrData.CompName);

  const editDetails = (type, value) => {
    if (type === "Name") {
      setName(value);
    } else if (type === "Email") {
      setEmail(value);
    } else if (type === "Address") {
      setAddress(value);
    } else if (type === "Phone") {
      setPhone(value);
    } else if (type === "Company") {
      setCompany(value);
    }
  };

  const updateProfile = () => {
    axios
      .post("/update-hr-profile", { name, email, address, phone, company })
      .then((res) => {
        if (res.data.Status === "Success") {
          let prevData = JSON.parse(localStorage.getItem("info"));

          // Check if prevData is an array, if so, take the first element

          prevData.HrName = name;
          prevData.HrEmail = email;
          prevData.CompADD = address;
          prevData.CompName = company;
          prevData.CompPhone = phone;
          localStorage.setItem("info", JSON.stringify(prevData));
          location.reload(true);
        }
      });
  };
  return (
    <div className="container mt-5">
      <div className="row p-3">
        <table>
          <tbody>
            <Edit type="Name" values={name} editDetails={editDetails} />

            <Edit type="Email" values={email} editDetails={editDetails} />

            <Edit type="Address" values={address} editDetails={editDetails} />

            <Edit type="Phone" values={phone} editDetails={editDetails} />

            <Edit type="Company" values={company} editDetails={editDetails} />
          </tbody>
        </table>
        <center>
          <button
            className="btn btn-primary mt-5 w-[80%]"
            onClick={updateProfile}
          >
            Update profile
          </button>
        </center>
      </div>
    </div>
  );
}
