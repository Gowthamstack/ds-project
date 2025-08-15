import React from 'react'
import { assests, testimonial } from '../../assets/assests'
import "./Testimonials.css";

const Testmonial = () => {
  return (
    <div className="testimonials">
        <h1>Testimonials...</h1>
        <div className='testimonials-content'>
          {testimonial.map((testimonial,index)=>(
            <div key={index} className='profiles'>
            <img src={testimonial.img}></img>
            <h3>{testimonial.role}</h3>
            <h4>{testimonial.description}</h4>
          </div> 
          ))}     
        </div>
    </div>
  )
}

export default Testmonial