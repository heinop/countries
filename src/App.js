import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log('filter', event.target.value)
    setFilter(event.target.value)
  }

  const showCountry = (country) => {
    console.log('Selected', country.name)
    setFilter(country.name)
  }

  const filteredCountries = filter
    ? countries.filter(country =>
      country.name.toUpperCase().includes(filter.toUpperCase()))
    : countries

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      <Countries countries={filteredCountries} onSelect={showCountry} />
    </div>
  )
}

export default App
