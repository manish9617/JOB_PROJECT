import React, { useEffect, useContext } from "react";
import Slideshow from "./slideshow/Slideshow";
import { AllFunction } from "../store/store";
import axios from "axios";
// import LogoRow from "./CompanyLogo/LogoRow";
function Home() {
  axios.defaults.withCredentials = true;
  const { handleAuth } = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      axios.get("/").then((res) => {
        if (res.data.Status === "Success") {
          handleAuth(user, true);
        } else {
          handleAuth(user, false);
          alert(res.data.Error);
        }
      });
    }
  });
  return (
    <>
      <Slideshow></Slideshow>
      {/* <LogoRow></LogoRow> */}
    </>
  );
}

export default Home;
