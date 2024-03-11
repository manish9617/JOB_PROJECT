import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FunctionProvider from "./Components/store/store";

axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <>
      <FunctionProvider>
        <Header></Header>
        <Outlet></Outlet>

        <Footer></Footer>
        <ToastContainer />
      </FunctionProvider>
    </>
  );
}

export default App;
