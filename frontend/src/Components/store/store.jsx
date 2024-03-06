import { createContext, useState } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
});
const FunctionProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [hrAuth, setHrAuth] = useState(false);

  const handleAuth = (type, temp) => {
    if (type === "user") setUserAuth(temp);
    else setHrAuth(temp);
  };
  return (
    <AllFunction.Provider value={{ userAuth, handleAuth, hrAuth }}>
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
