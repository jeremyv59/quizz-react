import { useState } from "react";
import SetupForm from "./components/form/SetupForm";
import { AppContextProvider } from "./context/context";

function App() {
  const [start, setStart] = useState(false);

  return (
    <AppContextProvider>
      <div className="container">
        <SetupForm started={start}></SetupForm>
      </div>
    </AppContextProvider>
  );
}

export default App;
