import { createContext, useState } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
  handleHrData: () => {},
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
  const handleHrData = (data) => {
    setHrData(...data);
  };
  const handleAuth = (type, temp) => {
    if (type === "user") setUserAuth(temp);
    else setHrAuth(temp);
  };
  return (
    <AllFunction.Provider
      value={{ userAuth, handleAuth, hrAuth, handleHrData, hrData }}
    >
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
