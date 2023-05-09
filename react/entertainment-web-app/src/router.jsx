import React, { useState } from "react";
import SignUp from "./routes/sign-up";
import Login from "./routes/login-page";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
const protectedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function Router() {
  const [isLoggedIn, serIsLoggedIn] = useState(true);
  return <RouterProvider router={isLoggedIn ? protectedRouter : router} />;
}

export default Router;
