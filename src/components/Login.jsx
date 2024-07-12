import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
export default function Login() {
    //get use context
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const isLoggedIn = useContext(AppContext).isLoggedIn;
    // get user input
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //show error displays
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState("")

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
        // hides error warning on new user input
        setIsError(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setIsError(false);
    }

    function authenticate() {
        // can be more explicit in error messaging
        if (username.trim() == "" || password.trim() == "") {
            setIsError(true)
            setErrorText("Please enter username and password")
            // use setTimeout to hide error messages again
            return
        }
        let users = JSON.parse(localStorage.getItem("users"))

        let filteredUsers = users.filter(user => user.username == username & user.password == password)
        if (filteredUsers.length == 0) {
            setIsError(true);
            setErrorText("Your username or password was incorrect");
            return
        }
        else if (filteredUsers.length == 1) {
            console.log("success= user id:" + filteredUsers[0].id);
            setIsError(true)
            setErrorText("success= user id:" + filteredUsers[0].id)
            setIsLoggedIn(true);
            localStorage.setItem("userID", filteredUsers[0].id)
            navigate("/")
        }



    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="flex">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            </div>
                            <div className="mt-2">
                                <input onChange={handleUsername} value={username} id="username" name="username" type="username" autoComplete="username" required className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input onChange={handlePassword} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>
                        {isError && <ErrorMessage errorText={errorText} />}
                        <div>
                            <Link onClick={authenticate} type="button" className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in</Link>
                        </div>

                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link to="/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Start a 14 day free trial</Link>
                    </p>
                </div>
            </div>
        </>
    )
}