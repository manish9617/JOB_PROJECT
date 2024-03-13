import React, { useState } from "react";
import "./experience.css";
import { FaRegEdit } from "react-icons/fa";
function Experience({ exp }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: exp.JobTitle,
    comapanyName: exp.CompanyName,
    startDate: exp.StartDate,
    endDate: exp.EndDate,
    description: exp.Description,
  });

  const handlePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="experience1">
      <div className="d-flex justify-content-between pe-3">
        <h1 className="fs-5  fw-bold">{exp.JobTitle}</h1>
        <button onClick={handlePopUp}>
          <FaRegEdit />
        </button>
      </div>

      <div className="row">
        <div className="col-3">Comapny Name</div>
        <div className="col-8">{exp.CompanyName}</div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">
          {new Date(exp.StartDate).toLocaleDateString()} to{" "}
          {new Date(exp.EndDate).toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <div className="col-3">Description</div>
        <div className="col-8">{exp.Description}</div>
      </div>

      {isOpen && (
        <div className="popup-wrapper mt-5">
          <div className="popup" style={{ maxHeight: "80vh" }}>
            <button className="close-btn" onClick={handlePopUp}>
              X
            </button>
            <div className="edit1">
              <div className="col-lg-8 w-full">
                <form className="jobform" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">
                      Job Role
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      name="jobTitle"
                      defaultValue={formData.jobTitle}
                      placeholder="Job Role"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      defaultValue={formData.comapanyName}
                      placeholder="Company Name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        defaultValue={formData.startDate}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        defaultValue={formData.endDate}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      defaultValue={formData.description}
                      placeholder="Description"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex">
                    <button
                      type="submit"
                      className="btn btn-dark w-100 mb-2 me-2 bg-primary"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;

// const [isOpen, setIsOpen] = useState(false);
// const [formData, setFormData] = useState({
//   // JsId: insertId,
//   jobTitle: "",
//   comapanyName: "",
//   startDate: "",
//   endDate: "",
//   experience: "",
//   description: "",
// });
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// const handleFileChange = (e) => {
//   setResume(e.target.files[0]);
// };
// const handleOpen = () => {
//   setIsOpen(true);
// };
// const handleClose = () => {
//   setIsOpen(false);
// };
// {
//   isOpen && (
//     <div className="popup-wrapper mt-4">
//       <div className="popup">
//         <button className="close-btn" onClick={handleClose}></button>
//         <div className="edit1">
//           <div className="col-lg-8 w-full">
//             <form onSubmit={() => {}}>
//               <div className="row mb-3">
//                 <div className="col">
//                   <label htmlFor="jobTitle" className="form-label text-white">
//                     Job Role
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="jobTitle"
//                     name="jobTitle"
//                     placeholder="Job Role"
//                     required
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col">
//                   <label
//                     htmlFor="companyName"
//                     className="form-label text-white"
//                   >
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="companyName"
//                     name="companyName"
//                     placeholder="Company Name"
//                     required
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col">
//                   <label htmlFor="startDate" className="form-label text-white">
//                     Start Date
//                   </label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="startDate"
//                     name="startDate"
//                     required
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="endDate" className="form-label text-white">
//                     End Date
//                   </label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="endDate"
//                     name="endDate"
//                     required
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col">
//                   <label htmlFor="adhar" className="form-label text-white">
//                     Experience
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="experience"
//                     name="experience"
//                     placeholder="How many years of experience have you had?"
//                     required
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col">
//                   <label
//                     htmlFor="description"
//                     className="form-label text-white"
//                   >
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="description"
//                     name="description"
//                     placeholder="Description"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="d-flex">
//                 <button
//                   type="submit"
//                   className="btn btn-dark w-100 mb-2 me-2 bg-primary"
//                 >
//                   REGISTER
//                 </button>
//                 <button
//                   className="btn btn-dark w-100 mb-2 ms-2 bg-primary"
//                   onClick={handleClose}
//                 >
//                   SKIP
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
