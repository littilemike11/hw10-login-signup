import { Link } from "react-router-dom"

export default function NavBar(props) {
    //not a child of app, cant access use context must use props

    return (
        <>

            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost text-xl">Hw 10</Link>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login">{props.button}</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}