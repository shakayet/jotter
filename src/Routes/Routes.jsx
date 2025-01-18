import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Pages/Welcome/Welcome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Homep from "../Pages/Home/Homep";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

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
  }
]);

export default Router;
