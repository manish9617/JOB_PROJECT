import { AllFunction } from "../store/store";
import Edit from "./Edit";
import React, { useContext, useEffect, useState } from "react";

export default function EditUserProfile() {
  const { hrData, handleHrData } = useContext(AllFunction);

  // useEffect(() => {
  //   if (localStorage.getItem("info") != null) {
  //     const storedData = JSON.parse(localStorage.getItem("info"));
  //     handleHrData(storedData);
  //     console.log(storedData);
  //   }
  // }, []);

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
          <button className="btn btn-primary mt-5 w-[80%]">
            Update profile
          </button>
        </center>
      </div>
    </div>
    // <div className="container mt-5">
    //   <div className="row p-3">
    //     <Edit type="Name" values={name} editDetails={editDetails} />
    //     <center>
    //       <hr style={{ width: "550px" }} />
    //     </center>
    //     <Edit type="Email" values={email} editDetails={editDetails} />
    //     <center>
    //       <hr style={{ width: "550px" }} />
    //     </center>
    //     <Edit type="Address" values={address} editDetails={editDetails} />
    //     <center>
    //       <hr style={{ width: "550px" }} />
    //     </center>
    //     <Edit type="Phone" values={phone} editDetails={editDetails} />
    //     <center>
    //       <hr style={{ width: "550px" }} />
    //     </center>
    //     <Edit type="Company" values={company} editDetails={editDetails} />
    //     <center>
    //       <hr style={{ width: "550px" }} />
    //     </center>
    //     <center>
    //       <button className="btn btn-primary mt-5 w-[80%]">
    //         Update profile
    //       </button>
    //     </center>
    //   </div>
    // </div>
  );
}
