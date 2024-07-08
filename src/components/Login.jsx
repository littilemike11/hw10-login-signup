import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { AppContext } from "../App";
export default function Login() {
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const isLoggedIn = useContext(AppContext).isLoggedIn;
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    function authenticate() { }

    return (
        <>
            {!isLoggedIn &&
                (<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
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
                                    <input onChange={handleUsername} value={username} id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
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
                                    <input onChange={handlePassword} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>

                            <div>
                                <Link onClick={() => setIsLoggedIn(true)} to="/" type="submit" className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Sign in</Link>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <Link to="/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Start a 14 day free trial</Link>
                        </p>
                    </div>
                </div>)}
        </>
    )
}