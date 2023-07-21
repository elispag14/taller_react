import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forgot from "./components/Forgot";
import Recover from "./components/Recover";
import Icon from "./assets/img/Icon.png";

import SignContext from "./context/SignContext";

function App() {
  
  const [step, setStep] = useState("signup");
  return (
    <SignContext.Provider value={{ step, setStep }}>
      <div className="container">
      <div className=""><img src={Icon}  /></div>
        {step === "signin" && <SignIn />}
        {step === "signup" && <SignUp />}
        {step === "forgot" && <Forgot />}
        {step === "recover" && <Recover />}
      </div>
    </SignContext.Provider>     
  );
}

export default App;
