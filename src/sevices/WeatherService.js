import { DateTime } from "luxon";

const API_KEY = "168f1d9905052fd53dddbfae1609876f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alert&appid=168f1d9905052fd53dddbfae1609876f&units=metric

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name, 
        dt, 
        sys: {country, sunrise, sunset},
        weather, 
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]
    return {
        lat, 
        lon, 
        feels_like, 
        temp, temp_min, 
        temp_max, 
        humidity, 
        name, 
        dt, 
        country, 
        sunrise, 
        sunset, 
        details, 
        icon, 
        speed}
        
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

    return {...formattedCurrentWeather};
};

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`


const formatToLocalTime = (
    secs, 
    zone,
    format = "cccc, dd LLL yyyy |' Local time: 'hh:mm a" 
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;

export {iconUrlFromCode, formatToLocalTime}