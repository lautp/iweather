export type User = {
    email: string;
    password: string;
    auth: Boolean;
};

export type Context = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
};
