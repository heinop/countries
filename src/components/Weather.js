import React, { useState, useEffect } from 'react'
import axios from 'axios'

const imageStyle = {
  maxWidth: '60px',
  height: 'auto'
}

const Weather = ({ city }) => {

  console.log('Weather for', city)

  const [weather, setWeather] = useState()

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${city}`
    axios.get(url)
      .then(response => {
        console.log('Got weather', response.data)
        setWeather(response.data)
      })
  }, [city])

  if (weather) {
    return (
      <div>
        <h3>Weather in {city}</h3>
        <div><b>temperature:</b> {weather.current.temperature} Celcius</div>
        <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} style={imageStyle}/>
        <div><b>wind:</b> {weather.current.wind_speed} m/s direction {weather.current.wind_dir}</div>
      </div>
    )
  } else {
    return null
  }
}

export default Weather