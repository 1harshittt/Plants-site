import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import Home from "../Home";
import Products from "../Products";
import About from "../About";
import Account from "../Account";
import Register from "../Account/Register";
import Cart from "../Pages/Cart";
import Error from "../Shared/Error";
import Beginners from "../HotDealsPages/Beginners";
import FloweringPlants from "../HotDealsPages/Flowering Plants";
import Wishlist from "../Wishlist";
import HotDeals from "../Pages/HotDeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/beginners",
        element: <Beginners />,
      },
      {
        path: "/floweringplants",
        element: <FloweringPlants />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/hot-deals",
        element: <HotDeals />,
      },
    ],
  },
]);

export default router;
