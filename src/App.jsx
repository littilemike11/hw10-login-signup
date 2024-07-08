import { useEffect, createContext, useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import { Outlet } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginText, setLoginText] = useState("Log In");

  // useEffect(() => {
  //   localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  //   console.log(JSON.parse(isLoggedIn));
  // }, [isLoggedIn]);

  const handleLogin = () => {
    console.log(isLoggedIn); // false expected
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn); // why still false?
    if (!isLoggedIn) {
      setLoginText("Log Out");
    } else setLoginText("Log In");
  };

  return (
    <>
      <NavBar button={<button onClick={handleLogin}>{loginText}</button>} />
      <AppContext.Provider value={{ setIsLoggedIn, isLoggedIn }}>
        <Outlet />
      </AppContext.Provider>

      {/* <button onClick={handleLogin}>{loginText}</button> */}
    </>
  );
}

export default App;
