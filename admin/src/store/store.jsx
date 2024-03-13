import { createContext, useState } from "react";

export const AllData = createContext({
  handleAuth: () => {},
});

export const DataProvider = ({ children }) => {
  // Export DataProvider as named export
  const [auth, setAuth] = useState(false);
  const handleAuth = (temp) => {
    setAuth(temp);
  };
  return (
    <AllData.Provider value={{ handleAuth, auth }}>{children}</AllData.Provider>
  );
};
