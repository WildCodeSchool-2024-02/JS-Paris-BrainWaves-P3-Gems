import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./components/pages/Home/HomePage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import CreateAccount from "./components/pages/CreateAccountPage/CreateAccount";
import ItemsPage from "./components/pages/ItemsPage/ItemsPage";
import ItemDetailsPage from "./components/pages/ItemDetailsPage/ItemDetailsPage";
import AddToCart from "./components/pages/AddToCardPage/AddToCart";
import SellingPage from "./components/pages/SellingPage/SellingPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import AdminPage from "./components/pages/AdminPage/AdminPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";
import SuccessPage from "./components/pages/SuccessPage/SuccessPage";

const api = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch(`${api}/api/category`),
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/createAccount", element: <CreateAccount /> },
      { path: "/items/:id", element: <ItemsPage /> },
      {
        path: "/itemDetails/:id",
        element: <ItemDetailsPage />,
      },
      {
        path: "/addToCart",

        element: (
          <ProtectedRoute>
            <AddToCart />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/selling",
        element: (
          <ProtectedRoute>
            <SellingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <ProtectedRoute>
            <SuccessPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
