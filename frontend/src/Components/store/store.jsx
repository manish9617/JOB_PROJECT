import { createContext, useState } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
});
const FunctionProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const handleAuth = (temp) => {
    setUserAuth(temp);
  };
  return (
    <AllFunction.Provider value={{ userAuth, handleAuth }}>
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
