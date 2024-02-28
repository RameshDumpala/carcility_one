import React from 'react'
import CarDetails from "../CarDetails.json";
 const Declined = ({decl}) => {
  return (
    <div>
     {decl && CarDetails.jobhistory.filter((c)=>c.status==="Declined").map((item2) => (
          <div
            className={
              (item2.type === "Service" && "type_service") ||
              (item2.type === "Wash" && "type_wash") ||
              (item2.type === "Repair" && "type_Repair")
            }
          >
            <div className="map_div">
              <span className="request">{item2.requestdate}</span>
              <span
                className={
                  item2.status === "Expired"
                    ? "status_expired"
                    : item2.status === "Declined"
                    ? "status_declined"
                    : item2.status === "Completed"
                    ? "status_completed"
                    : ""
                }
              >
                {item2.status}
              </span>
              <span className="quote">{item2.quote}</span>
              <span className="model_div"> {item2.model}</span>
              <span className="details_div">{item2.details}</span>
              <span className="area_div">{item2.area}</span>
            </div>  
          </div>
        ))}

    </div>
  )
}
export default  Declined
