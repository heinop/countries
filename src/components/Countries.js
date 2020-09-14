import React from 'react'
import Country from './Country'

const Countries = ({ countries, onSelect }) => {

  const listCountries = () => {
    return countries.map(country => (
      <div key={country.alpha3Code}>
        {country.name} 
        <button onClick={() => onSelect(country)}>show</button>
      </div> 
    ))
  }

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      listCountries()
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default Countries