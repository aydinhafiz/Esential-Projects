import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./routes/sign-up";
import LoginPage from "./routes/login-page";
import Router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
