import React, { useState } from "react";
import { FavsObject } from "./types";
import { Button } from "@mui/material";

const WeatherCard: React.FC<any> = ({ detail }) => {
    const [city, setCity] = useState<string>("");

    let favsObject: FavsObject = { cities: [] };
    if (!localStorage.getItem("favs")) {
        localStorage.setItem("favs", JSON.stringify(favsObject));
    }
    let favs: string | null = localStorage.getItem("favs");
    if (favs) {
        favsObject = JSON.parse(favs);
    }

    const handleClick = () => {
        if (favsObject.cities && detail) {
            favsObject.cities.push(detail.location.name);
            localStorage.setItem("favs", JSON.stringify(favsObject));
            setCity(detail.location.name);
        }
    };

    return (
        <>
            <h1 className="text-center font-bold text-xl font-[roboto]">
                {detail.location.name || city}
            </h1>
            <div className="w-full flex justify-center">
                <img src={detail.current.condition.icon} alt="" />
            </div>
            <div>
                Temp. actual: {Math.floor(detail.current.feelslike_c)} <i>C°</i>
            </div>
            <div>
                El clima: <i>{detail.current.condition.text}</i>{" "}
            </div>
            <div>Humedad: {Math.floor(detail.current.humidity)}%</div>
            <div>
                Viento: {Math.floor(detail.current.wind_kph)} <i>Km/H</i>
            </div>
            <div className="flex justify-center">
                <Button
                    variant="text"
                    onClick={handleClick}
                    disabled={
                        favsObject.cities.filter(
                            (city) =>
                                city.toLowerCase() ===
                                detail.location.name.toLowerCase()
                        ).length === 1
                    }
                >
                    ciudad favorita
                </Button>
            </div>
        </>
    );
};

export default WeatherCard;
