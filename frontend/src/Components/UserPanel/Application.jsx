import React from "react";

function Application({ application }) {
  return (
    <tr>
      <th scope="row">{idx}</th>
      <td>{application.AppliedJobTitle}</td>
      <td>{application.CompanyName}</td>
      <td>{application.CompanyWebsite}</td>
      <td>{application.ApplicationStatus}</td>
      <td>
        <button>View Profile</button>
      </td>
    </tr>
  );
}

export default Application;
