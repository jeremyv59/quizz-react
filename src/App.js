import { useEffect, useState } from "react";
import SetupForm from "./components/form/SetupForm";
import { AppContextProvider } from "./context/context";
import "../src/app.css";

function App() {
  const [start, setStart] = useState(false);

  // useEffect(() => {
  //   console.log("start", start);
  // }, [start]);

  return (
    <AppContextProvider>
      <div className="container">
        <div className="container_setup_form">
          <SetupForm setStarted={setStart}></SetupForm>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
