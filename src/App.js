import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter'
import Result from './components/Result'

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

  const filteredCountries = filter
    ? countries.filter(country =>
      country.name.toUpperCase().includes(filter.toUpperCase()))
    : countries

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      <Result countries={filteredCountries} />
    </div>
  )
}

export default App
