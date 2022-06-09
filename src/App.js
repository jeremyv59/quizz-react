import { useContext, useEffect, useState } from "react";
import SetupForm from "./components/setup/SetupForm";
import { AppContext, AppContextProvider } from "./context/context";
import "../src/app.css";
import Questions from "./components/questions/Questions";

function App() {
  const [start, setStart] = useState(false);

  return (
    <AppContextProvider>
      <div className="container">
        <div className="container_setup_form">
          {!start ? (
            <SetupForm setStarted={setStart}></SetupForm>
          ) : (
            <Questions setStarted={setStart}></Questions>
          )}
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
