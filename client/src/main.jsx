import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/loginPage", element: <LoginPage /> },
      { path: "/createAccount", element: <CreateAccount /> },
      { path: "/itemsPage", element: <ItemsPage /> },
      {
        path: "/itemsDetailsPage",
        element: <ItemDetailsPage />,
      },
      {
        path: "/addToCart",
        element: <AddToCart/>,
      },
      { path: "/sellingPage", element: <SellingPage /> },
      { path: "/profilePage", element: <ProfilePage /> },
      { path: "/adminPage", element: <AdminPage /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
