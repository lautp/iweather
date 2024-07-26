import React, { useState, ReactNode } from "react";
import UserContext from "./UserContext";
import { User } from "./types";

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
        auth: false,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
