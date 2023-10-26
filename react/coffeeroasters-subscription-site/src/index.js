import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import { GlobalStyle } from "./components/global-style/global-style";
import Subscribe from "./pages/Subscribe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About-Us",
    element: <AboutUs />,
  },
  {
    path: "/Subscribe",
    element: <Subscribe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
