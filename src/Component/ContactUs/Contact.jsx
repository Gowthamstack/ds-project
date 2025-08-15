import React from 'react'
import "./Contact.css"
import { assests } from '../../assets/assests'
const Contact = () => {
  return (
    <div className="contact">
    <div className='address'>
        <h2>9/4 Raja Street,Velachery,</h2>
        <h2>178 Gandhi Road Chennai 600042.</h2>
        <h2>Tamil Nadu.</h2>
        <h3>E-Mail : sumathiap10@gmail.com</h3>
    </div>
    <div className='address-img'>
        <img src={assests.address} alt="" />
      </div>
      
    </div>
  )
}

export default Contact
