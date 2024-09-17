import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './routes/homepage/Homepage';
import Dashboardpage from "./routes/dashboardpage/Dashboardpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboardpage/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);