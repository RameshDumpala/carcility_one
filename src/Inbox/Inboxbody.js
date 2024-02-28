import React, { useState } from "react";
import "./Inboxbody.css";
import CarDetails from "../CarDetails.json";

const Inboxbody = () => {
  const [inbox, setInbox] = useState(CarDetails);
  return (
    <div className="rectangle-2">
    <div className="inboxmain_div">
      
        <h1> Inbox</h1>
        {inbox.jobhistory.slice(0, 8).map((item) => (
          <div className="inbox_map">
            <p className="name_inbox"> {item.name}</p>
            <p className="nimber_inbox"> {item.number}</p>
            <span className="establis"> {item.established}</span>
            <div className="month">
            <span > {item.month}</span>
            <p> {item.time}</p>
            </div>
          </div>
        ))}
   
    </div>
    </div>
  );
};

export default Inboxbody;
