import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/sign-up/sign-up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
