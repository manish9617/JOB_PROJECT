import React, { useRef, useState } from "react";
import "./EditHrprofile.css";

export default function Edit({ type, values, editDetails }) {
  const [editField, setEditField] = useState("");
  const value = useRef();

  const handleEdit = (field) => {
    setEditField(field);
  };

  const saveData = () => {
    editDetails(type, value.current.value);
    console.log(value.current.value);
    setEditField("");
  };

  const handleFocus = () => {
    setEditField(type);
  };

  return (
    <div className={`edit p-1 ${editField === type ? "input-focused" : ""}`}>
      <label>{type} : </label>
      <input
        type="text"
        className={` h-8 mt-2 me-4${
          editField === type ? " border border-primary rounded-xl" : ""
        }`}
        name={type}
        defaultValue={values}
        ref={value}
        disabled={editField !== type}
        onFocus={handleFocus}
      />
      {editField !== type && (
        <button className="" onClick={() => handleEdit(type)}>
          Edit
        </button>
      )}
      {editField === type && (
        <>
          <button className="btn btn-primary mt-2 me-2 h-8" onClick={saveData}>
            Save
          </button>
          <button
            className="btn btn-danger mt-2 h-8"
            onClick={() => setEditField("")}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
