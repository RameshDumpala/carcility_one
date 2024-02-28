import React, { useState } from "react";

// import CarDetails from "./CarDetails.json";
import moment from "moment";

export const Tomorrow = ({ list }) => {
  //   const [value, setvalue] = useState(CarDetails);

  return (
    <div>
      <h3 className="today"> Tomorrow</h3>
      {list.tomorrow.map((items) => (
        <div
          className={
            (items.status === "service" && "service_border ") ||
            (items.status === "wash" && "wash_border") ||
            (items.status === "repair" && "repair_border")
          }
        >
          <div className="card">
            <p className="time">
              {moment(items.time).format("hh:mm A")} - {items.id}
            </p>
            <span className="model"> {items.model}</span>
            <span className="repair"> : {items.repair}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
