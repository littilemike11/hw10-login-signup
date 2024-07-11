import Hero from "./Hero";
import { useContext, useEffect, useState } from 'react'
import { AppContext } from "../App";

export default function Home() {
    const isLoggedIn = useContext(AppContext).isLoggedIn;

    const [user, setUser] = useState({})

    //get current user when logged in
    useEffect(() => {
        if (!isLoggedIn) return
        let userID = localStorage.getItem("userID");
        //if (userID == null) return// for first time opening
        setUser(JSON.parse(localStorage.getItem("users"))[userID])

    }, [])
    function getInfo() {
        let users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
    }


    return (
        <>
            <Hero
                isLoggedIn={isLoggedIn}
            />

            {isLoggedIn &&
                (<>
                    <br />
                    <h1>Home Section- only seen on login</h1>
                    <h2> User Info: </h2>

                    <p>username: {user.username}</p>
                    <p>password: {user.password}</p>
                    <button onClick={getInfo} className="btn"> get info </button>
                </>)}
        </>
    )
}