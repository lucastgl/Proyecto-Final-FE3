import Login from "../Screen/Login";
import Footer from "../Components/Footer"
import Navbar from "../Components/Layout/Navbar"

import Home from "../Screen/Home";
import Details from "../Screen/Detalis";
import Contact from "../Screen/Contact";
import Favorites from "../Screen/Favorites";

export const routes = [
    {
        id: 1,
        path: "/home",
        Component: Home
    },
    {
        id: 2,
        path: "/favorites",
        Component: Favorites
    },
    {
        id: 3,
        path: "/users/:id",
        Component: Details
    },
    {
        id: 4,
        path: "/contact",
        Component: Contact
    }
];

export {Login, Navbar, Footer}