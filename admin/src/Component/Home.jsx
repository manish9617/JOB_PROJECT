import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AllData } from "../store/store";

function Home() {
  const { handleAuth } = useContext(AllData);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("/adminAuth").then((res) => {
      if (res.data.Status === "Success") handleAuth(true);
    });
  }, []);
  return <div>Hello</div>;
}

export default Home;
