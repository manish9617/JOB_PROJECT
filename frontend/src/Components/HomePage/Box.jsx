import React from "react";
import styles from "./Box.module.css";

function Box() {
  return (
    <div className="border-2  w-[80%] h-[80%] rounded-[25px] mt-[40px]">
      <p className="m-2 text-md font-bold text-[#8C8594] ">TRENDING AT #1</p>
      <h3 className="mb-0 m-4 text-2xl md:mt-8">Jobs for Freshers</h3>
      <p className="text-shadow:0px 0px 2px #000 stroked bg-text absolute left-[24px] top-[40%] whitespace-nowrap text-[28px] font-bold text-transparent transition-all duration-500 md:left-[75px] md:top-[47%] md:text-[64px]">
        Jobs for Freshers
      </p>
      <div className="absolute bottom-0 right-0 h-full max-h-[130px] w-[100px] object-contain md:max-h-[180px] md:w-[45%]">
        <span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"></span>
      </div>
      <span className="mt-[25px]  left-[4px] rounded-lg px-4 font-semibold  md:mt-[100px]">
        View all
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"></svg>
      </span>
    </div>
  );
}

export default Box;
