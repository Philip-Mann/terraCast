import React, { useEffect, useState } from 'react';



export default function Current({ locationQuery} ) {

  const api = {
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    key: "83a22b5a34cb19d0e38c6aa207053af8"
  }

  // while loading
  const [isLoading, setIsLoading] = useState(false);
  // fetch data
  // eslint-disable-next-line no-unused-vars
  const [weatherData, setWeatherData] = useState('');
  // weather icon and alt
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');
  // current temp & feels like
  const [temp, setTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  // todays hi and lo
  const [highTemp, setHighTemp] = useState('');
  const [lowTemp, setLowTemp] = useState('');

  const fetchWeather = () => {
    setIsLoading(true);
    fetch(`${api.baseUrl}weather?q=${locationQuery}&units=imperial&appid=${api.key}`)
      .then(response => response.json())
      .then(weatherData => {
        setIsLoading(false);
        setWeatherData(weatherData);
        setIcon(weatherData.weather[0].icon);
        // Capitalized Using RegEx
        // https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
        setDescription((weatherData.weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
        // current temp and feels like
        setTemp(Math.round(weatherData.main.temp));
        setFeelsLike(Math.round(weatherData.main.feels_like));
        // daily hi and low
        setHighTemp(Math.round(weatherData.main.temp_max));
        setLowTemp(Math.round(weatherData.main.temp_min));
      });
  };

  useEffect(() => {
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationQuery]);

  return (
    <>
    <div className="forecast-card">
      <div className="forecast">
        <p>{isLoading ? 'Getting Forecast...' : ''}</p>
        <div className="container-fluid location">
          <p>{locationQuery}</p>
        </div>
        <div className="current-forecast-card d-flex justify-content-between align-items-center">
          <div className="container-fluid current-temp justify-content">
              <p>{temp}°</p>
              <h6>Feels Like: {feelsLike}°</h6>
          </div>
          <div className="container-fluid current-info">
              <img className="weather-icon" src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} />
              <h6>{description}</h6>
              <p>H: {highTemp}°</p>
              <p>L: {lowTemp}°</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
