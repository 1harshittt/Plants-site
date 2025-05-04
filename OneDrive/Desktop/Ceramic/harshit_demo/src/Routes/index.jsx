import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Home from "../App/Home/Home";
import About from "../App/About/About";
import Shop from "../App/Shop/Shop";
import Profile from "../App/Profile";
import Cart from "../App/Cart/Cart";
import Wishlist from "../App/Wishlist/Wishlist";
import NotFound from "../App/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Cart fullPage={true} />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/wishlist/full",
                element: <Wishlist fullPage={true} />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default router;
