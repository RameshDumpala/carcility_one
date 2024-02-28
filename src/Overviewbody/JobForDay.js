import React from "react";
import "./JobForDay.css";
const JobForDay = () => {
  return (
    <div>
        <div className="jobforsub_div">
      <div className="mask1">
        <div div className="forday">
          {" "}
          JobForDay
        </div>
        <h1 className="number">70</h1>
      </div>
      <div className="mask2">
        <div div className="forday">
          {" "}
          RATING THIS WEEK
        </div>
        <h1 className="number">4.5</h1>
      </div>
      <div className="mask3">
        <div div className="top5">
          {" "}
          Top 5 requested Services
        </div>
     <span className="requested_services">
        <p>AC duct sanitization</p>
        <p>Wash & Shine</p>
        <p>Interior Germ protect</p>
        <p>AC duct sanitization</p>
        </span>
      </div>
      </div>
    </div>
  );
};

export default JobForDay;
