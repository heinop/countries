import React from 'react'
import Country from './Country'

const Result = ({ countries }) => {

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map(country =>
          (<div key={country.name}>{country.name}</div>))}
      </div>
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

export default Result