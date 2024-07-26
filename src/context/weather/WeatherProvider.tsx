import React, { useState, ReactNode } from "react";
import WeatherContext from "./WeatherContext";

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [city, setCity] = useState<object>({});

    return (
        <WeatherContext.Provider value={{ city, setCity }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
