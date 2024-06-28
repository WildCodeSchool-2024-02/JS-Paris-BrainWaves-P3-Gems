import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { OnlineProvider } from "./contexts/OnlineContext";
import { CartProvider } from "./contexts/CartContext";

import router from "./router";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <OnlineProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </OnlineProvider>
  </React.StrictMode>
);
