import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";
import {
    Stack,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login: React.FC = () => {
    const [email, setMail] = useState<string>("");
    const [password, setPass] = useState<string>("");
    const [showError, setShowError] = useState<Boolean>(false);
    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    const handleClick = () => {
        console.log(user);
        if (user === null) {
            setShowError(true);
        }
        if (user.email === email && user.password === password) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: user.email,
                    password: user.password,
                    auth: true,
                })
            );
            setUser({
                email: user.email,
                password: user.password,
                auth: true,
            });

            navigate("/home");
        } else {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: user.email,
                    password: user.password,
                    auth: false,
                })
            );
            setUser({
                email: user.email,
                password: user.password,
                auth: true,
            });
            setShowError(true);
        }
    };

    return (
        <Stack
            spacing={2}
            sx={{
                width: 300,
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "hidden",
                wordBreak: "break-word",
            }}
        >
            <TextField
                id="outlined-search"
                label="Usuario"
                type="usuario"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setShowError(false);
                    setMail(e.target.value);
                }}
            />
            <TextField
                id="outlined-search"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setShowError(false);
                    setPass(e.target.value);
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    handleClick();
                }}
                disabled={email === "" || password === ""}
            >
                Login
            </Button>
            {showError && (
                <h1 className=" font-semibold text-red-600">
                    Usuario no encontrado
                </h1>
            )}
            <h1 className="pt-5 underline">Sin cuenta?</h1>
            <Button
                variant="text"
                onClick={() => {
                    navigate("/register");
                }}
            >
                Registrarse
            </Button>
        </Stack>
    );
};

export default Login;
