import '../Components/list.css'


const FirstProfileRow = ({data}) => {

  return (
    <div className='container'>
    {data.map((item, index) => {
       return (
           
           <div className='first-row'>
           <div className="left-profile">
               <img className='profile1' src={item.picture} alt="profile picture" />
               <ul className='list'>
                   <li className='first-child'>{item.id}</li>
                   <li className='first-child'>{item.title}</li>
                   <li className='first-child'>{item.firstName}</li>
                   <li className='first-child'>{item.lastName}</li>
               </ul>
           </div>
           
       </div>
      
       )
    })}
</div>
  )
}

export default FirstProfileRow