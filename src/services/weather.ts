import axios from "axios";

export const getWeather = async (value: string): Promise<object> => {
    const newValue: string = value.split(" ").join("+");

    const headers = {
        "x-rapidapi-key": "ee317729b3msh15c3d800185cc8cp171e2bjsn75288936c34c",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    };

    const res = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${newValue}&lang=es`,
        { headers }
    );

    return res.data;
};

export const getForecast = async (value: string): Promise<object> => {
    const newValue: string = value.split(" ").join("+");

    const headers = {
        "x-rapidapi-key": "ee317729b3msh15c3d800185cc8cp171e2bjsn75288936c34c",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    };

    const res = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${newValue}&days=3&lang=es`,
        { headers }
    );

    return res.data;
};
