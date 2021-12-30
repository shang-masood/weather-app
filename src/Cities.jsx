import React from 'react';
import { Link } from 'react-router-dom';
const City=[
  {
Name :'Arbil' ,
Image :'https://upload.wikimedia.org/wikipedia/commons/3/34/Hawler_Castle.jpg'
  },

{
Name :'sulaymaniyah',
Image :'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sulaymaniyah_at_Night.jpg/220px-Sulaymaniyah_at_Night.jpg'
  },
  {
    Name:'Duhok',
    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMJcsPDUaC9T_S3aEPiWFcLd5w14F5rSQqQ&usqp=CAU'
      },
  {
        Name:'Kirkuk',
        Image:'https://cdn.kurdistan24.net/resources/files/2017/10/Kirkuk%20Tour/KirkukPesh.jpg'
     },
     {
      Name:'London',
      Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXixD_2MsdFZt5pTeV_WMk-6MEVdIjw9XTsg&usqp=CAU'
        },  
]
const Cities= props =>
{
  return(
City.map(el=>{
  return(
   
    <Link to={`/Cities/${el.Name}`} >
  <div className='city-div'>
  <img src={el.Image} alt={el.Name}/>
   <h4>{el.Name}</h4>

</div>
</Link>

  )
}
)
      
  )
}
export default Cities;