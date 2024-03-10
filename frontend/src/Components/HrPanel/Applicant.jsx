import React from "react";

function Applicant({ applicant }) {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{applicant.JsFName + " " + applicant.JsLName}</td>
      <td>{applicant.JsEmail}</td>
      <td>{applicant.Phone}</td>
      <td>Resume</td>
      <td>
        <button>View Profile</button>
      </td>
    </tr>
  );
}

export default Applicant;
