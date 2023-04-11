import React from 'react'
import SearchBar from './SearchBar'
import FirstProfileRow from './FirstProfileRow'
// import SecondProfileRow from './SecondProfileRow'
// import ThirdProfileRow from './ThirdProfileRow'
// import FourthProfileRow from './FourthProfileRow'
// import FifthProfileRow from './FifthProfileRow'


const BodyComponent = () => {
  return (
    <div className='body'>
        <div className="child">
           <SearchBar /> 
           <FirstProfileRow />
           {/* <SecondProfileRow />
           <ThirdProfileRow />
           <FourthProfileRow />
           <FifthProfileRow /> */}
           
        </div>
    </div>
  )
}

export default BodyComponent