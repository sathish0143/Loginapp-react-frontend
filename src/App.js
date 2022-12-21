import "./App.css";
import { useState } from "react";
import Login from "./componants/loginpage/login";
import Home from "./componants/home/home";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    console.log("onLogout  called");
    setIsUserSignedIn(false);
  };
  return (
    (isUserSignedIn && <Home onLogout={onLogout} />) || (
      <Login onLoginSuccessful={onLoginSuccessful} />
    )
  );
}

export default App;
