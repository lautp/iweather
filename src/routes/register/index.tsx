import React, { useState, useContext } from "react";
import {
    Stack,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

const Register: React.FC = () => {
    const { user: _user, setUser } = useContext(UserContext);
    const [email, setMail] = useState<string>("");
    const [password, setPass] = useState<string>("");
    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    const handleClick = () => {
        localStorage.setItem(
            "user",
            JSON.stringify({ email: email, password: password, auth: true })
        );
        setUser({ email: email, password: password, auth: true });
        navigate("/home");
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
                    setMail(e.target.value);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === "Enter") handleClick();
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
                    setPass(e.target.value);
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    handleClick();
                }}
            >
                Registrarse
            </Button>
            <Button
                variant="text"
                onClick={() => {
                    navigate("/");
                }}
            >
                volver
            </Button>
        </Stack>
    );
};

export default Register;
