import React, { useState } from 'react'
import data from '../data/people'
import FirstProfileRow from './FirstProfileRow'


const SearchBar = () => {

    const [query, setQuery] = useState("")
  
    function handleChange(e) {
      setQuery(e.target.value)
    }

    const search = (data) => {
      return data.filter((item) => item.firstName.toLowerCase().includes(query))  
    }

  return (
    <div>
        <input type="search"
            className='input'
            placeholder='Search by name...'
            onChange={handleChange} />
        
       <FirstProfileRow data={search(data)} /> 
    </div>
  )
}

export default SearchBar