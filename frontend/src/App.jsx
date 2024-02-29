import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
