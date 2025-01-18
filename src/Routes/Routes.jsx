import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Pages/Welcome/Welcome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Notes from "../Pages/Notes/Notes";
import Images from "../Pages/Images/Images";
import Pdf from "../Pages/Pdf/Pdf";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/forgot",
        element: <ForgotPassword />
    },
    {
        path: "/notes",
        element: <Notes />
    },
    {
        path: "/images",
        element: <Images />
    },
    {
        path: "/pdf",
        element: <Pdf />
    }
]);

export default Router;
