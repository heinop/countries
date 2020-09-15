import React from 'react'
import Weather from './Weather'

const imageStyle = {
  maxWidth: '150px',
  height: 'auto'
}

const Country = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        capital {country.capital}<br/>
        population {country.population}
      </p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="Flag" style={imageStyle} /> 
      <Weather city={country.capital} />
    </div>
  ) 
}

export default Country