import React from 'react'
import "./BodyComponent.css"

const BodyComponent = () => {
  return (
    <div> 
        <h1>Overview</h1>
        <div className='mask'>
        <div className='job-distribution'>JOB DISTRIBUTION</div>
        <div className='service_wash_repail'>
        <span className="service_color1"></span>
        <span className="service1">Service</span>
        <span className="wash_color1"></span>
        <span className="wash1">Wash</span>
        <span className="repair_color1"></span>
        <span className="repai1">Repair</span>
        </div>
         {/* <Schedule /> */}
        </div>



    </div>
  )
}

export default BodyComponent