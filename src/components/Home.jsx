import NavBar from "./NavBar";
import Hero from "./Hero";
import { useContext, useEffect, useState } from 'react'
import { AppContext } from "../App";

export default function Home(props) {
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const isLoggedIn = useContext(AppContext).isLoggedIn;

    const [user, setUser] = useState({})

    useEffect(() => {
        let userID = localStorage.getItem("userID")
        setUser(JSON.parse(localStorage.getItem("users"))[userID])

    }, [])
    function getInfo() {
        let users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
    }


    return (
        <>
            <Hero />
            {isLoggedIn &&
                (<><h1>Home Section- only seen on login</h1>
                    <p>username: {user.username}</p>
                    <p>password: {user.password}</p>
                    <button onClick={getInfo} className="btn"> get info </button>
                </>)}
        </>
    )
}