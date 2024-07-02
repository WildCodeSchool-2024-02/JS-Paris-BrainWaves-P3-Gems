import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { OnlineProvider } from "./contexts/OnlineContext";
import router from "./router";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <OnlineProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </OnlineProvider>
  </React.StrictMode>
);
