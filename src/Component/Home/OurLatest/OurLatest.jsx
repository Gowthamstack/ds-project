import React from 'react'
import { assests } from '../../../assets/assests'
import "./OurLatest.css"

const OurLatest = () => {
  return (
    <div className="our-latest">
        <div className="drone-video">
            <video src={assests.drone_video}  autoPlay muted loop/>
        </div>
        <div className='drone-content'>
            <h1 className='drone-title'>Experience the Future of Aerial Views</h1>
            <p className='drone-subtitle'>Cutting-edge drone technology for breathtaking photograpy,videography, and surveying</p>
        </div>
        <button className='drone-btn'>Explore More</button>
    </div>
  )
}

export default OurLatest