import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './component/TopButtons';
import { Inputs } from './component/Inputs';
import TimeAndLocation from './component/TimeAndLocation';
import TemperatureAndDetails from './component/TemperatureAndDetails';
import Forecast from './component/Forecast';
import getWeatherData from './sevices/WeatherService';
import getFormattedWeatherData from './sevices/WeatherService';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q:'berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(()=> {
    const fetchWeather = async () => {
       const message = query.q ? query.q : 'current location.'

       toast.info("Fetching weather for " + message)

       await getFormattedWeatherData({...query, units}).then(
       (data) => {
        toast.success(`successfully fetched weather for ${data.name}, ${data.country}`)
        setWeather(data);
       });
    }
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
if(!weather) return 'from-cyan-700 to-blue-700'
const threshhold = units === 'metric' ? 20 : 68
if(weather.temp <= threshhold) return 'from-cyan-700 to-blue-700'
return 'from-yellow-700 to-orange-700'
  }


  

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 
      ${formatBackground()}`} >
      <TopButtons setQuery = {setQuery}/>
      <Inputs setQuery = {setQuery} units = {units} setUnits = {setUnits}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather = {weather}/>
          <Forecast title="Hourly Forecast" weather={weather}/>
          <Forecast title="Daily Forecast" weather={weather}/>
        </div>
      )}

    <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    

    </div>
    
  );
}

export default App;
