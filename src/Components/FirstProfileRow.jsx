import '../Components/list.css'


const FirstProfileRow = ({data}) => {

  return (
    <div className='container'>
    {data.map((item, index) => {
       return (
           
           <div className='first-row'>
             <div className="left-profile">
               <img className='profile1' src={item.picture} alt="profile" />
               <span className="user-data">
                  <p className='user-id'>{item.id}</p>
                  <ul className='list'>
                      <li className='first-child'>{item.title}</li>
                      <li className='first-child'>{item.firstName}</li>
                      <li className='first-child'>{item.lastName}</li>
                  </ul>
               </span>
              
           </div>
            
          
           
       </div>
      
       )
    })}
</div>
  )
}

export default FirstProfileRow