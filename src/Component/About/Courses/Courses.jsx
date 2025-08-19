import React from 'react'
import { offer } from '../../../assets/assests'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='course'>
        <div className='all_course'>
            {offer.map((offer,index)=>(
                <div key={index} className='offer'>
                    <img style={{width:"220px",height:"220px"}} src={offer.img}/>
                    <div>{offer.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Courses