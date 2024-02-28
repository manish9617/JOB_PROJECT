// LogoRow.js
import React from "react";
import "./LogoRow.css"; // Import CSS for styling

const LogoRow = () => {
  return (
    <div className="logo-row-container">
      <div className="logo-row">
        <div className="logo-item">
          <img src="company1_logo.png" alt="Company 1 Logo" />
          <span>Company 1</span>
        </div>
        <div className="logo-item">
          <img src="company2_logo.png" alt="Company 2 Logo" />
          <span>Company 2</span>
        </div>
        {/* Add more logo items here */}
      </div>
    </div>
  );
};

export default LogoRow;
