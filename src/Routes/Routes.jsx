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
import Favourites from "../Pages/Favourites/Favourites";
import Calendar from "../Pages/Calender/CalenderComponent";
import CalendarComponent from "../Pages/Calender/CalenderComponent";
import Profile from "../Pages/Profile/Profile";

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
        path: "/pdfs",
        element: <Pdf />
    },
    {
        path: "/favourite",
        element: <Favourites /> 
    },
    {
        path: "/calendar",
        element: <CalendarComponent />
    },
    {
        path: "/profile",
        element: <Profile />
    }
]);

export default Router;
