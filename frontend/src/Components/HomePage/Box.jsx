import React from "react";
import styles from "./Box.module.css";

function Box({ type, index, link }) {
  return (
    <div className={styles.card}>
      <p className="m-2 text-md font-bold text-[#8C8594]">
        TRENDING AT {index}
      </p>
      <h3 className="mb-0 m-4 text-2xl font-bold font-sans md:mt-8">
        JOBS FOR {type}
      </h3>

      <div className="relative">
        <div className="absolute bottom-0 right-0 h-full max-h-[130px] w-[100px] object-contain md:max-h-[180px] md:w-[45%]">
          {/* Image Container */}
        </div>
        <span className="absolute mt-[25px] left-[4px] rounded-lg px-4 font-semibold md:mt-[100px]">
          View all
        </span>
      </div>

      <img
        src={link}
        className="absolute bottom-0 right-0 h-full max-h-[130px] w-[100px] object-contain md:max-h-[180px] md:w-[60%]"
      />
    </div>
  );
}

export default Box;
