import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import { useNavigate, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const pages =
        location.pathname === "/home"
            ? ["favoritos"]
            : location.pathname !== "/favoritos"
            ? ["home", "favoritos"]
            : ["home"];
    const settings = ["Logout"];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const HandleClickMenu = (page: string) => {
        navigate(`/${page}`);
        handleCloseNavMenu();
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ThermostatIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "roboto",
                            fontWeight: 600,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        iWeather
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {location.pathname !== "/login" &&
                                location.pathname !== "/" &&
                                location.pathname !== "/register" &&
                                pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={() => HandleClickMenu(page)}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                    <ThermostatIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "roboto",
                            fontWeight: 600,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        iWeather
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {location.pathname !== "/login" &&
                            location.pathname !== "/" &&
                            location.pathname !== "/register" &&
                            pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => HandleClickMenu(page)}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {location.pathname !== "/login" &&
                            location.pathname !== "/" &&
                            location.pathname !== "/register" && (
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <ManageAccountsOutlinedIcon
                                            style={{ color: "white" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            )}

                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => {
                                        handleCloseUserMenu();
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
                                            auth: false,
                                        });
                                        navigate("/");
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
