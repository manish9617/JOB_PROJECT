import React from "react";
import style from "./Search.module.css";

function Search() {
  return (
    <>
      <div className="flex flex-col w-[60%] mx-5 justify-center items-center lg:flex-row border-solid left-[50%] border-4 p-1 m-5 rounded-xl bg-slate-200 shadow-xl">
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3">
          <input
            className="py-1 px-1 rounded-md p-6 font-bold text-2xl lg:w-1/2 lg:mr-5"
            placeholder="Enter Job Type"
          />
          <div>
            <br />
          </div>
          <input
            type="text"
            placeholder="Enter Job Location"
            className="py-1 px-1 rounded-md p-6 font-bold text-2xl lg:w-1/2"
          />
        </div>
        <div className="flex justify-center lg:justify-center w-[80%] lg:w-1/3 mt-3 lg:mt-0">
          <button className={style.btn}>SEARCH HERE!</button>
        </div>
      </div>
    </>
  );
}

export default Search;
