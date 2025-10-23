import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";

import ToysDetails from "../Pages/ToysDetails";
import Toys from "../Pages/Toys";
import Login from "../Pages/Login/Login";

import Error from "../Pages/Error";
import Forget from "../Pages/Forget";
import PrivateProvider from "../Provider/PrivateProvider";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/toys",
        element: <Toys></Toys>,
      },

      {
        path: "/toyDetails/:id",

        element: (
          <PrivateProvider>
            <ToysDetails></ToysDetails>,
          </PrivateProvider>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget",
        element: <Forget></Forget>,
      },
      {
        path: "/profile",

        element: (
          <PrivateProvider>
            <Profile></Profile>
          </PrivateProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
