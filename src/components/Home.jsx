import NavBar from "./NavBar";
import Hero from "./Hero";
import { useContext } from 'react'
import { AppContext } from "../App";
export default function Home(props) {
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const isLoggedIn = useContext(AppContext).isLoggedIn;
    function getInfo() {
        let users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
    }


    return (
        <>
            <Hero />
            {isLoggedIn &&
                (<><h1>Home Section- only seen on login</h1>
                    <p>username: {props.username}</p>
                    <p>password: {props.password}</p>
                    <button onClick={getInfo} className="btn"> get info </button>
                </>)}
        </>
    )
}