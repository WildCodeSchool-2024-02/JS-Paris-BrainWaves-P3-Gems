import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import CreateAccount from "./components/pages/CreateAccount";
import ItemsPage from "./components/pages/ItemsPage";
import ItemDetailsPage from "./components/pages/ItemDetailsPage";
import AddToCart from "./components/pages/AddToCart";
import SellingPage from "./components/pages/SellingPage";
import ProfilePage from "./components/pages/ProfilePage";
import AdminPage from "./components/pages/AdminPage";

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
        element: <AddToCart />,
      },
      { path: "/sellingPage", element: <SellingPage /> },
      { path: "/profilePage", element: <ProfilePage /> },
      { path: "/adminPage", element: <AdminPage /> },
    ],
  },
]);

export default router;
