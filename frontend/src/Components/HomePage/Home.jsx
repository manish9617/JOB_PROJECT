import React, { useEffect, useContext } from "react";
import Slideshow from "./slideshow/Slideshow";

import { AllFunction } from "../store/store";
import axios from "axios";
import Search from "./Search";
import HomePart from "./HomePart";
import style from "./Home.module.css";
// import LogoRow from "./CompanyLogo/LogoRow";

function Home() {
  axios.defaults.withCredentials = true;
  const { handleAuth } = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      axios.get("/").then((res) => {
        if (res.data.Status === "Success") {
          if (res.data.type === "user") handleAuth("user", true);
          else if (res.data.type === "hr") {
            handleAuth("hr", true);
            window.location.href = "/hr";
          }
        }
      });
    }
  });
  return (
    <>
      <br />
      <Slideshow></Slideshow>
      <div className={style.Main}>
        {/**JOB LINES COMPONENTS */}
        <div className="flex  flex-col lg:flex-row ">
          <Search></Search>
          <div className="pt-5">
            <h1 className={style.H1}>Here You Can </h1>
            <h2 className={style.H2}>Find The Job</h2>
          </div>
        </div>

        <div className="flex w-[95%] ml-[5%] overflow-auto ">
          <HomePart></HomePart>
        </div>
      </div>
    </>
  );
}

export default Home;
