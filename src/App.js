import { useState } from "react";
import SetupForm from "./components/form/SetupForm";
import { AppContextProvider } from "./context/context";
import "../src/app.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <AppContextProvider>
      <div className="container">
        <div className="container_setup_form">
          <SetupForm started={start}></SetupForm>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
