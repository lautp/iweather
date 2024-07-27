import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import "dayjs/locale/es";

import { getForecast } from "../../services/weather";

import { Stack, Button, CircularProgress } from "@mui/material";

const Detail: React.FC = () => {
    const [currentCity, setCurrentCity] = useState<any>([]);
    const location = useLocation();
    const navigate = useNavigate();
    const cityName = location.state.city;

    useEffect(() => {
        dayjs.locale("es");
        const detailsFetch = async () => {
            const details = await getForecast(cityName);

            setCurrentCity(details);
        };

        detailsFetch();
    }, []);

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
            <h1 className="text-center font-bold text-xl font-[roboto]">
                {cityName}
            </h1>
            {currentCity?.forecast ? (
                <>
                    <h1 className="text-center text-lg font-[roboto]">
                        Pronostico de 3 dias
                    </h1>
                    {currentCity.forecast?.forecastday.map(
                        (el: object, index: number) => {
                            return (
                                <div className="border-t-2 pt-3 border-sky-200">
                                    <h1 className="text-left text-lg font-[roboto] capitalize">
                                        {currentCity.forecast?.forecastday &&
                                            el &&
                                            dayjs(
                                                currentCity.forecast
                                                    ?.forecastday[index].date
                                            )
                                                .locale("ES")
                                                .format("dddd")}
                                    </h1>
                                    <div className="w-full flex justify-center">
                                        <img
                                            src={
                                                currentCity.forecast
                                                    ?.forecastday[index].day
                                                    .condition.icon
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            Temp. promedio:{" "}
                                            {Math.floor(
                                                currentCity.forecast
                                                    ?.forecastday[index].day
                                                    .avgtemp_c
                                            )}{" "}
                                            <i>C°</i>
                                        </div>
                                        <div>
                                            El clima:{" "}
                                            <i>
                                                {
                                                    currentCity.forecast
                                                        ?.forecastday[index].day
                                                        .condition.text
                                                }
                                            </i>{" "}
                                        </div>
                                        <div>
                                            Humedad:{" "}
                                            {Math.floor(
                                                currentCity.forecast
                                                    ?.forecastday[0].day
                                                    .avghumidity
                                            )}
                                            %
                                        </div>
                                        <div>
                                            Viento:{" "}
                                            {Math.floor(
                                                currentCity.forecast
                                                    ?.forecastday[0].day
                                                    .maxwind_kph
                                            )}{" "}
                                            <i>Km/H</i>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}

                    <Button
                        variant="text"
                        style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                        }}
                        onClick={() => navigate(-1)}
                    >
                        volver
                    </Button>
                </>
            ) : (
                <div className="flex justify-center">
                    <CircularProgress />
                </div>
            )}
        </Stack>
    );
};

export default Detail;
