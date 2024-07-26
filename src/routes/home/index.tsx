import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import WeatherCard from "../../components/weatherCard";

import { useContext } from "react";
import { WeatherContext } from "../../context/weather";

import { getWeather } from "../../services/weather";

const Home: React.FC = () => {
    const { city, setCity } = useContext(WeatherContext);
    const [value, setValue] = useState<string>("");
    const handleClick = () => {
        getWeather(value).then((res: object): void => {
            setCity(res);
        });
    };

    const handleRendering = () => {
        if (Object.keys(city).length === 0) {
            return <div></div>;
        }
        return <WeatherCard detail={city} />;
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
                label="Búsca una ciudad"
                type="search"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === "Enter") handleClick();
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    handleClick();
                }}
            >
                Buscar
            </Button>
            {handleRendering()}
        </Stack>
    );
};

export default Home;
