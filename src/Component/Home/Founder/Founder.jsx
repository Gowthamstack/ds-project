import React from 'react'
import { assests } from '../../../assets/assests'
import "./Founder.css"

const Founder = () => {
  return (
    <div className='founder'>
        <div className="header">
            <h1>Meet Our CEO</h1>
        </div>
        <div className='founder-content'>  
            
            <img src={assests.ceo_icon} alt="" />
            <div>
                <h2>Co-Founder of Ds-InterConect</h2>
                <h3>Name</h3>
            </div>
        </div>
    </div>
  )
}

export default Founder