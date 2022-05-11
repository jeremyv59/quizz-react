import { useState } from "react";
import SetupForm from "./components/form/SetupForm";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="container">
      <SetupForm started={start}></SetupForm>
    </div>
  );
}

export default App;
