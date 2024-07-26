import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FavsObject } from "../../components/weatherCard/types";
import { Stack, Button, CircularProgress } from "@mui/material";
import { getWeather } from "../../services/weather";

const Favs: React.FC = () => {
    const [cities, setCities] = useState<any>([]);
    let favsObject: FavsObject = { cities: [] };
    let favs: string = localStorage.getItem("favs") as string;
    favsObject = JSON.parse(favs);

    const navigate = useNavigate();

    useEffect(() => {
        const detailsFetch = async () => {
            const details = await Promise.all(
                favsObject.cities.map(async (city) => {
                    return await getWeather(city);
                })
            );

            setCities(details);
        };

        detailsFetch();
    }, []);

    const handleClick = (city: string) => {
        navigate("/detail", { state: { city } });
    };

    return (
        <div className="flex-wrap">
            {favsObject?.cities.length > 0
                ? favsObject?.cities.map((city, index) => {
                      return (
                          <div key={index} className=" p-1">
                              <Stack
                                  key={index}
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
                                      {city}
                                  </h1>
                                  {cities[index]?.current ? (
                                      <>
                                          <div className="w-full flex justify-center">
                                              <img
                                                  src={
                                                      cities[index]?.current
                                                          .condition.icon
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <div className="flex justify-between">
                                              <div>
                                                  Temp. actual:{" "}
                                                  {Math.floor(
                                                      cities[index]?.current
                                                          .feelslike_c
                                                  )}{" "}
                                                  <i>C°</i>
                                              </div>
                                              <Button
                                                  variant="text"
                                                  style={{
                                                      paddingTop: "0px",
                                                      paddingBottom: "0px",
                                                  }}
                                                  onClick={() =>
                                                      handleClick(city)
                                                  }
                                              >
                                                  ver mas
                                              </Button>
                                          </div>
                                      </>
                                  ) : (
                                      <div className="flex justify-center">
                                          <CircularProgress />
                                      </div>
                                  )}
                              </Stack>
                          </div>
                      );
                  })
                : "Nada por aca"}
        </div>
    );
};

export default Favs;
