import React, {useState, useEffect} from 'react'
import weatherServices from '../services/weather'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        weatherServices
        .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
        .then((response) => {
            setWeather(response)
            console.log('response:', response)
        })
        .catch((error) => console.log('error:', error))
    }, [country.capitalInfo.latlng])

    if (!weather) {
        return <div>Weather data not available</div>
    }

  return (
    weather === null ? (
      <div>Weather still on load...</div>
    ) : (
      <div>
        <h4>Weather currently in {country.name.common}:</h4>
        <p>temperature: {weather.main.temp} Celsius</p>
        <p>wind: {weather.wind.speed} m/s</p>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description}></img>
      </div>
    )
  )
}

export default Weather
