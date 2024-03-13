import { createContext, useState, useEffect } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
  handleHrData: () => {},
  handleHrPostJobData: () => {},
  handleUserdata: () => {},
});
const FunctionProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [hrAuth, setHrAuth] = useState(false);
  const [hrData, setHrData] = useState({
    HrName: "",
    HrEmail: "",
    CompADD: "",
    CompPhone: "",
    CompName: "",
    AdharId: "",
    AdminId: "",
    CompWeb: null,
  });
  const [userData, setUserData] = useState(null);
  const handleUserdata = (data) => {
    setUserData(data);
  };

  const handleHrData = (data) => {
    setHrData(data);
  };

  const handleAuth = (type, temp) => {
    console.log(type, temp);
    if (type === "user") setUserAuth(temp);
    else setHrAuth(temp);
  };
  const [hrPostjobData, setHrPostJobData] = useState(null);
  const handleHrPostJobData = (totalJob) => {
    setHrPostJobData(totalJob);
  };
  return (
    <AllFunction.Provider
      value={{
        userAuth,
        handleAuth,
        hrAuth,
        handleHrData,
        hrData,
        handleHrPostJobData,
        hrPostjobData,
        handleUserdata,
        userData,
      }}
    >
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
