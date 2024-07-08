import { useEffect, createContext, useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import { Outlet } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const status = JSON.parse(localStorage.getItem("isLoggedIn"));
    return status || false
  });
  const [loginText, setLoginText] = useState("Log In");

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    console.log(JSON.parse(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(!isLoggedIn)
    }
  };

  return (
    <>
      <NavBar
        button={<button onClick={handleLogin} className="btn">{isLoggedIn ? "Log Out" : "Log In"} </button>}
      />
      <AppContext.Provider value={{ setIsLoggedIn, isLoggedIn }}>
        <Outlet />
      </AppContext.Provider>

      {/* <button onClick={handleLogin}>{loginText}</button> */}
    </>
  );
}

export default App;
