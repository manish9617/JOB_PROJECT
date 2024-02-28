import Edit from "./Edit";
import React, { useState } from "react";

export default function EditUserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

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
        <Edit type="Name" values={name} editDetails={editDetails} />
        <center>
          <hr style={{ width: "550px" }} />
        </center>
        <Edit type="Email" values={email} editDetails={editDetails} />
        <center>
          <hr style={{ width: "550px" }} />
        </center>
        <Edit type="Address" values={address} editDetails={editDetails} />
        <center>
          <hr style={{ width: "550px" }} />
        </center>
        <Edit type="Phone" values={phone} editDetails={editDetails} />
        <center>
          <hr style={{ width: "550px" }} />
        </center>
        <Edit type="Company" values={company} editDetails={editDetails} />
        <center>
          <hr style={{ width: "550px" }} />
        </center>
      </div>
    </div>
  );
}
