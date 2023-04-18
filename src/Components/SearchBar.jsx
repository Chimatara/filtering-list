import React, { useState } from 'react'
import data from '../data/people'
import FirstProfileRow from './FirstProfileRow'


const SearchBar = () => {

    const [query, setQuery] = useState("")
  
    function handleChange(e) {
      setQuery(e.target.value)
    }

    const keys = ['id', 'title', 'firstName', 'lastName']

    const search = (data) => {
      return data.filter((item) =>
      
      // THIS CODE GIVES YOU THE ABILITY TO SEARCH ANY KEY:PROPERTIES OF THE USER 
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))

      // THIS CODE MAKES YOU ABLE TO SEARCH ONLY THE FIRST NAME OF THE USER
      // item.firstName.toLowerCase().includes(query.toLowerCase()))  
      );
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