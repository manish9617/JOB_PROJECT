import { createContext, useState, useEffect } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
  handleHrData: () => {},
  handleHrPostJobData: () => {},
  handleInsertId: () => {},
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
  const [insertId, setInsertId] = useState(0);
  const handleHrData = (data) => {
    setHrData(data);
  };
  const handleInsertId = async (id) => {
    try {
      await setInsertId(id);
    } catch (error) {
      throw error;
    }
  };
  const handleAuth = (type, temp) => {
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
        insertId,
        handleInsertId,
      }}
    >
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
