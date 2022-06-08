import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);

  return (
    <AppContext.Provider value={{ questions, setQuestions, start, setStart }}>
      {children}
    </AppContext.Provider>
  );
};
