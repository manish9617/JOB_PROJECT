import style from "./Filter.module.css";
export default function Filter() {
  return (
    <div className={style.filter}>
      <h1 className="fs-4 p-2">Filter</h1>
      <hr />
      {/* ------------WorkMode -----------------*/}
      <h2 className="mt-2 ms-1 fw-bold ">Work mode</h2>
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Work from Home</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Office</label>
      {/* -------------Job role-------------- */}
      <h2 className="mt-2 ms-1 fw-bold ">Job Role</h2>
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Software engineer</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Intern</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Full stack web developer</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Backend developer</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Java full developer</label>
      {/* ------------------Salary----------------- */}
      <h2 className="mt-2 ms-1 fw-bold ">Salary</h2>
      <div className="d-flex mt-2">
        <input
          type="number"
          placeholder="  MIN"
          className="me-2  border border-black rounded-5"
          style={{ width: "100px" }}
        ></input>
        <input
          type="number"
          placeholder="  MAX"
          className="ms-2 border border-black rounded-5"
          style={{ width: "100px" }}
        ></input>
      </div>
      {/* ----------------Work Type------------ */}
      <h2 className="mt-2 ms-1 fw-bold ">Work Location</h2>
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Remote</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Office</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Hybrid</label>
      {/*----------------- Location -------------------*/}
      <h2 className="mt-2 ms-1 fw-bold ">Location</h2>
      <select
        className="form-select mt-2 ms-2"
        style={{ width: "220px", padding: "3px" }}
      >
        <option selected>All</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Pune</option>
        <option>Bangalore</option>
        <option>Hyderrabad</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Kolkata</option>
        <option>Ahmdabad</option>
        <option>Chennai</option>
      </select>
      {/*------------------ Experience----------------- */}
      <h2 className="mt-2 ms-1 fw-bold ">Experience</h2>
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Freshers</label>
      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">Less then one year</label>

      <br />
      <input type="checkbox" className="ms-1 mt-1" />
      <label className="ms-1 mt-1">More than 5 years</label>
    </div>
  );
}
