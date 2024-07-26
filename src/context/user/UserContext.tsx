import { createContext } from "react";
import { Context } from "./types";

const ContextValue: Context = {
    user: {
        email: "",
        password: "",
        auth: false,
    },
    setUser: () => {},
};

const UserContext = createContext<Context>(ContextValue);

export default UserContext;
