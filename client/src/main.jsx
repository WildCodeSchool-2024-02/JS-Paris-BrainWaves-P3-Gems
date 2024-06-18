import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { OnlineProvider } from "./contexts/OnlineContext";
import router from "./router";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <OnlineProvider>
      <RouterProvider router={router} />
    </OnlineProvider>
  </React.StrictMode>
);
