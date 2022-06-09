import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  return (
    <AppContext.Provider value={{ questions, setQuestions }}>
      {children}
    </AppContext.Provider>
  );
};
