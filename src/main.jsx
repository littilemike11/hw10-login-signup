import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './components/Login'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home'
import Secure from './components/Secure.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/secure',
        element: <Secure />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
