import React from "react";
import CarDetails from "../CarDetails.json";
const Completed = ({ comp }) => {
  return (
    <div>
      {comp &&
        CarDetails.jobhistory
          .filter((c) => c.status === "Completed")
          .map((item1) => (
            <div
              className={
                (item1.type === "Service" && "type_service") ||
                (item1.type === "Wash" && "type_wash") ||
                (item1.type === "Repair" && "type_Repair")
              }
            >
              <div className="map_div">
                <span className="request">{item1.requestdate}</span>
                <span
                  className={
                    (item1.status === "Expired" && "status_expired") ||
                    (item1.status === "Declined" && "status_declined") ||
                    (item1.status === "Completed" && "status_completed")
                  }
                >
                  {item1.status}
                </span>
                <span className="quote">{item1.quote}</span>
                <span className="model_div"> {item1.model}</span>
                <span className="details_div">{item1.details}</span>
                <span className="area_div">{item1.area}</span>
              </div>
            </div>
          ))}
    </div>
  );
};
export default Completed;
