import createUser from "../users"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ErrorMessage from "./ErrorMessage";
export default function SignUp() {

    const [users, setUsers] = useState(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users"));
        return savedUsers || [];
    });
    const [userCount, setUserCount] = useState(() => {
        const existingUsers = JSON.parse(localStorage.getItem("userCount"));
        return existingUsers || 0;
    })
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("")
    const [bio, setBio] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("United States");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    //show error displays
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState("");

    // const handleConfirmPassword = (e) => {
    //     setConfirmPassword(e.target.value)
    //     // theres a delay on when confirmPassword is updated
    //     if (password !== confirmPassword) {
    //         console.log(password + "-" + confirmPassword)
    //         setIsError(true)
    //         setErrorText("Passwords must match")
    //     }
    //     else {
    //         setIsError(false)
    //     }

    // }

    // when users[] is updated, the function runs
    // the function saves users[] to localStorage under the key "users"
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("userCount", JSON.stringify(userCount));
    }, [users])

    /**
     * Accepts an event e, and setter function from useState. Use setter function to update corresponding useState variable to user input
     * @param {Event} e 
     * @param {Function} setterFunc 
     */
    function getInput(e, setterFunc) {
        setterFunc(e.target.value)
    }
    // function handleCountry(e) {
    //     setCountry(e.target.value)
    //     console(e.target.value)
    // }

    let isConfirmed = false;
    const navigate = useNavigate()
    async function submit() {
        if (username.trim() == "" || password.trim() == "") return
        let id = userCount
        let newUser = createUser({ id, username, password, bio, fname, lname, email, country, address, city, state, zip })
        setUsers([...users, newUser])
        setUserCount(userCount + 1)
        isConfirmed = true;
        console.log(newUser)
    }
    async function signUp() {
        // wait for info to be stored from submit function
        await submit();
        //go to home screen once submit is completed
        if (isConfirmed) navigate("/")
    }
    return (
        <>

            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-white-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={username}
                                            onChange={(e) => { getInput(e, setUsername) }}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="janesmith"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => { getInput(e, setPassword) }}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="sm:col-span-4">
                                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-white-900">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="confirm-password"
                                            id="confirm-password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPassword}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            {isError && <ErrorMessage errorText={errorText} />} */}

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-white-900">
                                    Bio
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="px-4 block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        value={bio}
                                        onChange={(e) => getInput(e, setBio)}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-white-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={fname}
                                        onChange={(e) => getInput(e, setfname)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={lname}
                                        onChange={(e) => getInput(e, setlname)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={email}
                                        onChange={(e) => getInput(e, setEmail)}
                                    />
                                </div>
                            </div>

                            {/* <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-white-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select

                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div> */}

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={address}
                                        onChange={(e) => getInput(e, setAddress)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-white-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={city}
                                        onChange={(e) => getInput(e, setCity)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-white-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={state}
                                        onChange={(e) => getInput(e, setState)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={zip}
                                        onChange={(e) => getInput(e, setZip)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-white-900">
                        Cancel
                    </button>


                    <button
                        onClick={signUp}
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Save
                    </button>




                </div>
            </form>
        </>
    )
}