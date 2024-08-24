import { createBrowserRouter } from "react-router-dom";
import GlobalTemplate from "./templates/GlobalTemplate";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

export const allRoute = createBrowserRouter([
  {
    element: <GlobalTemplate />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
