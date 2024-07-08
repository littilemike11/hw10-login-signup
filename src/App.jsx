import { useEffect, createContext, useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import { Outlet } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
  //set isLoggedIn to false on default or the value of it in local storage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const status = JSON.parse(localStorage.getItem("isLoggedIn"));
    return status || false
  });
  //update value of isLoggedIn in local storage on change
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    console.log(JSON.parse(isLoggedIn));
  }, [isLoggedIn]);

  const signOut = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
    }
  };

  return (
    <>
      <NavBar
        button={<button onClick={signOut} className="btn">{isLoggedIn ? "Log Out" : "Log In"} </button>}
      />
      <AppContext.Provider value={{ setIsLoggedIn, isLoggedIn }}>
        <Outlet />
      </AppContext.Provider>

      {/* <button onClick={handleLogin}>{loginText}</button> */}
    </>
  );
}

export default App;
