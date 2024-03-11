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
      <Slideshow></Slideshow>
      <div className={style.main}>
        <center>
          <Search></Search>
        </center>
        <div className="flex w-[95%] overflow-auto">
          <HomePart></HomePart>
        </div>
      </div>
    </>
  );
}

export default Home;
