import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const WeatherCard = ({ TempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = TempInfo;

    let timestr = "Loading";
    if (sunset) {
    const date = new Date(sunset * 1000);
    timestr = date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    });

}

  return (
    <>
      <div className='main-div'>
        <div className="sec-div">
            <div className="temp-con">
                <div><span className="temp">{temp}&deg;C</span></div>
                <div className='con'><h2>{name}, {country}</h2></div>
            </div>
            
          <span className='date'>
            {new Date().toLocaleDateString()}<br />
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <span><i className="fa-solid fa-cloud-sun cloud-one"></i></span>

      <div className="bottom-div">
        <div className='extra'>
          <div className='sunny'>
            <span><i className="fa-solid fa-sun sun"></i></span>
            <p>{timestr}<br />Sunset</p>
          </div>
          <div className='humid'>
            <span><i className="fa-solid fa-smog hum"></i></span>
            <p>{humidity}<br />Humidity</p>
          </div>
          <div className='press'>
            <span><i className="fa-solid fa-cloud-showers-heavy pressure"></i></span>
            <p>{pressure}<br />Pressure</p>
          </div>
          <div className="wind">
            <span><i className="fa-solid fa-wind wind-speed"></i></span>
            <p>{speed}<br />Wind</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
