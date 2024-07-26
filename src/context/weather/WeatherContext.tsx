import { createContext } from "react";
import { Context } from "./types";

const ContextValue: Context = {
    city: {},
    setCity: () => {},
};

const WeatherContext = createContext<Context>(ContextValue);

export default WeatherContext;
