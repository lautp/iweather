import React, { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const Error: React.FC = () => {
    const error: any = useRouteError();
    console.error(error);
    const navigate = useNavigate();
    let timer = "off";

    useEffect(() => {
        if (timer === "off") {
            timer = "on";
            setTimeout(() => {
                navigate("/home");
            }, 5000);
        }
    }, []);

    return (
        <div
            id="error-page"
            className="bg-sky-200 w-dvh h-lvh p-10 flex justify-center items-center"
        >
            <div className="text-center">
                <h1>Oops!</h1>

                <p>Sorry, an unexpected error has occurred.</p>

                <h1>
                    <i>{error.statusText || error.message}</i>
                </h1>

                <p>You're being redirected shortly.</p>
            </div>
        </div>
    );
};

export default Error;
