import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WeatherProvider } from "./context/weather";
import { UserProvider } from "./context/user";

import Root from "./routes/root";
import Home from "./routes/home";
import Favs from "./routes/favs";
import Detail from "./routes/detail";

import "./main.css";
import "@fontsource/roboto/400.css";
import Error from "./routes/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/register",
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/favoritos",
                element: <Favs />,
            },
            {
                path: "/detail",
                element: <Detail />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserProvider>
            <WeatherProvider>
                <RouterProvider router={router} />
            </WeatherProvider>
        </UserProvider>
    </React.StrictMode>
);
