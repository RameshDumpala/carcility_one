import React, { useState } from "react";
import './Schedule.css';
import CarDetails from "../CarDetails.json";
import { TbCalendarTime } from "react-icons/tb";
import { Tomorrow } from "./Tomorrow.js";

import moment from "moment";

export const Schedule = () => {
  const [data, setData] = useState(CarDetails);
  const [active,setActive] =useState(false)

  const handelmore=()=>{
    setActive(!active)
  } 
  console.log(data.today);
  return (
    <div className="schedulecomp_container">
       <span><TbCalendarTime className="time_icon"/></span>
      <h3 className="name">SCHEDULE</h3>
     
      <div className="details">
        <span className="service_color"></span>
        <span className="service">Service</span>
        <span className="wash_color"></span>
        <span className="wash">Wash</span>
        <span className="repair_color"></span>
        <span className="repai">Repair</span>
      </div>
      <h3 className="today"> TODAY</h3>
      {/* <div className="mapContainer"> */}
     {active ? data.today.map((item) => (
        <div
          className={
            (item.status === "service" && "service_border ") ||
            (item.status === "wash" && "wash_border") ||
            (item.status === "repair" && "repair_border")
          }
        >
          <div className="card">
            <p className="time">
              {moment(item.time).format("hh:mm A")} - {item.id}
            </p>
            <span className="model"> {item.model}</span>
            <span className="repair">{item.repair}</span>
          </div>
        </div>
      )):
      data.today.slice(0,4).map((item) => (
        <div
          className={
            (item.status === "service" && "service_border ") ||
            (item.status === "wash" && "wash_border") ||
            (item.status === "repair" && "repair_border")
          }
        >
          <div className="card">
            <p className="time">
              {moment(item.time).format("hh:mm A")} - {item.id}
            </p>
            <span className="model"> {item.model}</span>
            <span className="repair">{item.repair}</span>
          </div>
       
        </div>
          
      ))}
      {/* </div> */}
      {
        active ?  <button className="less"  onClick={handelmore}>show less</button>
     :  <button className="more" onClick={handelmore}>+{(data.today.length )} more</button>
     
      }
      <Tomorrow list={data} />
    </div>
  );
};
