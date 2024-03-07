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
    <tr className={`edit p-1 ${editField === type ? "input-focused" : ""}`}>
      <td className="w-[20%]">
        <label>{type} : </label>
      </td>
      <td className="w-[50%]">
        <input
          type="text"
          className={` h-8 mt-2 me-4 w-[100%] ps-1${
            editField === type ? " border border-primary rounded-xl" : ""
          }`}
          name={type}
          defaultValue={values}
          ref={value}
          disabled={editField !== type}
          onFocus={handleFocus}
        />
      </td>
      <td className="w-[25%]">
        {editField !== type && (
          <button className="ms-5" onClick={() => handleEdit(type)}>
            Edit
          </button>
        )}
        {editField === type && (
          <>
            <button
              className="btn btn-primary mt-2 me-2 h-8"
              onClick={saveData}
            >
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
      </td>
    </tr>
  );
}
