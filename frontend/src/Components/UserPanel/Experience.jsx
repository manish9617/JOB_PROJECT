import React from "react";
import "./experience.css";
import { FaRegEdit } from "react-icons/fa";
function Experience() {
  return (
    <div className="experience1">
      <div className="d-flex justify-content-between pe-3">
        <h1 className="fs-5  fw-bold">Role</h1>
        <button>
          <FaRegEdit />
        </button>
      </div>

      <div className="row">
        <div className="col-3">Comapny Name</div>
        <div className="col-8">Microsoft </div>
      </div>
      <div className="row">
        <div className="col-3">Start date to End Date</div>
        <div className="col-8">Microsoft</div>
      </div>
      <div className="row">
        <div className="col-3">Description</div>
        <div className="col-8">Microsoft</div>
      </div>
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
