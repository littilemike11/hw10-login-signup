import { Link } from "react-router-dom"
export default function Hero(props) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Hello Welcome to my hw 10
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Right now, you are at the home pg or landing pg.
        </p>
        {!props.isLoggedIn &&
          (<div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you are new here, you can choose to sign up below.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signUp"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
          )
        }
      </div>

    </>
  )
}