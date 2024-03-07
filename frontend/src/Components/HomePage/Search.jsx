import React from "react";

function Search() {
  return (
    <>
      <div className="flex flex-col w-[80%] mx-5 justify-center items-center lg:flex-row border-solid left-[50%] border-4 p-3 m-5 rounded-xl bg-slate-200 shadow-xl">
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
        <div className="flex justify-center lg:justify-center w-full lg:w-1/3 mt-3 lg:mt-0">
          <button className="bg-black text-3xl text-white rounded-[5px] w-full font-bold lg:w-auto p-2">
            SEARCH HERE!
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
