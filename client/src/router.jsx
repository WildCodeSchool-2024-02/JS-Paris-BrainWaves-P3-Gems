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
