import React from 'react'

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
      <img src={country.flag} alt="Flag" width="300" height="300" /> 
    </div>
  ) 
}

export default Country