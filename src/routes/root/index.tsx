import React, { useContext, useEffect } from "react";

import { User } from "../login/types";

import NavBar from "../../components/navbar";
import Login from "../login";
import Register from "../register";

import { UserContext } from "../../context/user";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Root: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        const jsonUser: string | null = localStorage.getItem("user") as string;
        const userStored: User = JSON.parse(jsonUser);
        setUser(userStored);
        if (
            !user.auth &&
            location.pathname !== "/" &&
            location.pathname !== "/register"
        ) {
            navigate("/");
        }
    }, []);
    return (
        <div className={`flex flex-col min-h-[100vh]`}>
            <NavBar />
            <div className="bg-sky-200 h-full p-10 flex-1 flex justify-center items-start">
                {location.pathname !== "/" && user?.auth && <Outlet />}
                {location.pathname === "/" && <Login />}
                {location.pathname === "/register" && <Register />}
            </div>
        </div>
    );
};

export default Root;
