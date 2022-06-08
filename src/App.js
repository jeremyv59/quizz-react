import { useContext, useEffect, useState } from "react";
import SetupForm from "./components/setup/SetupForm";
import { AppContext, AppContextProvider } from "./context/context";
import "../src/app.css";
import Questions from "./components/questions/Questions";

function App() {
  const context = useContext(AppContext);
  console.log("ctx", context);
  // const [isStarted, setIsStarted] = useState(context ? context.start : null);

  // useEffect(() => {
  //   if (context !== null) {
  //     setIsStarted(context.start);
  //   }
  //   console.log("is started", isStarted);
  // }, [context.start !== null]);

  const checkStarted = (started) => {
    if (started === true) return true;
    if (started === false) return false;
    if (started === null) return false;
  };

  useEffect(() => {}, [context]);

  return (
    <AppContextProvider>
      <div className="container">
        <div className="container_setup_form">
          {context === undefined ? (
            <SetupForm></SetupForm>
          ) : (
            <Questions></Questions>
          )}
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
