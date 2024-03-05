import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FunctionProvider from "./Components/store/store";
axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <>
      <FunctionProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </FunctionProvider>
    </>
  );
}

export default App;
