import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import { Outlet } from "react-router";
import { DataProvider } from "./store/store.jsx"; // Import DataProvider as named import

function App() {
  return (
    <div>
      <DataProvider>
        {" "}
        {/* Use DataProvider as named import */}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DataProvider>
    </div>
  );
}

export default App;
