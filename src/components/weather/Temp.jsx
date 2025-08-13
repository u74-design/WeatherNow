import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Temp = () => {
  const [searchValue, setSearchValue] = useState();
  const [tempInfo, setTempInfo] = useState({});


  const getWeatherinfo = async () => {
    if(!searchValue){
      toast.error("Please enter a city Name!")
      return;
    }
 
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f7265a236fc9c19895a8ea05e386568c`;

      const response = await fetch(url);
      const data = await response.json();

      if(data.cod === "404"){
        toast.error("Invalid city name. Please try again.");
        setTempInfo({});
        return;
      }
  
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      toast.error("Something went wrong , Try again later !")
    }
  };

  useEffect(() => {
    getWeatherinfo();
  }, []);

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Search City"
          className="search-bar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="search-name" onClick={getWeatherinfo}>
          Search
        </div>

        
      </div>

      <WeatherCard TempInfo={tempInfo} />
    </div>
  );
};

export default Temp;
