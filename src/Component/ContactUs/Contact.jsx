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
        <div className='mail'>
          <img className='mail_icon' src={assests.mail_icon}/>
          <h3>sumathiap10@gmail.com</h3>
        </div>
    </div>
    <div className='address-img'>
        <img src={assests.location} alt="" />
      </div>
      
    </div>
  )
}

export default Contact
