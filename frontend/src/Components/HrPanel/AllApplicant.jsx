import React, { useEffect, useState } from "react";
import Applicant from "./Applicant";
import axios from "axios";
function AllApplicant({ onSelectTab, id }) {
  const [Applicantdata, setApplicantData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Applicantdata === null) {
          const response = await axios.get(`/AllApplicant/${id}`);
          if (response.data.Status === "Success") {
            setApplicantData(response.data.applicant);
          }
        }
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (Applicantdata === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mt-4 ms-4 ps-5">
        <button
          className="btn btn-primary w-[10%]"
          onClick={() => {
            onSelectTab("jobs");
          }}
        >
          back
        </button>
      </div>
      <div className="ps-5 pe-5 m-4 ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Resume</th>
              <th scope="col">View profile</th>
            </tr>
          </thead>
          {Applicantdata.length > 0 ? (
            <tbody>
              {Applicantdata.map((applicant) => (
                <Applicant key={applicant.JsId} applicant={applicant} />
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
    </>
  );
}

export default AllApplicant;
