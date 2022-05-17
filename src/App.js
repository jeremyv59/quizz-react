import { useState } from "react";
import SetupForm from "./components/form/SetupForm";
import { AppContextProvider } from "./context/context";
function App() {
  const [start, setStart] = useState(false);

  return (
    <AppContextProvider>
      <div className="container">
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container_setup_form"
        >
          <SetupForm started={start}></SetupForm>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
