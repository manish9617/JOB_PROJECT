import React, { useEffect, useState } from "react";
import Application from "./Application";
import axios from "axios";

function AllApplication() {
  axios.defaults.withCredentials = true;
  const [allApllication, setAllApplication] = useState([]);
  useEffect(() => {
    console.log("hello");
    if (localStorage.getItem("token") !== null) {
      axios.get("/allApplication").then((res) => {
        if (res.data.Status === "Success") {
          // setAllApplication(res.data.appliction);
          console.log(res.data.appliction);
        }
      });
    }
  }, []);
  return (
    <div>
      <div className="ps-5 pe-5 m-4 ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Title</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company website</th>
              <th scope="col">Application Status</th>
              <th scope="col">View Application</th>
            </tr>
          </thead>
          {allApllication.length > 0 ? (
            <tbody>
              {allApllication.map((application, idx) => (
                <Application key={idx} idx={idx} application={application} />
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="7">No applicants found.</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default AllApplication;
