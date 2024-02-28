import React from "react";
import "./Activity.css";
const Activity = () => {
  return (
    <div className="activitymain_div">
      <div className="mask_activity">
        <div div className="forday_activity">
          {" "}
          Activity
        </div>
        <div className="number_activity">
          <h3>3</h3>
          <h3>21</h3>
          <h3>13</h3>
        </div>

        <div className="newmessage">
            <span>New Message</span>
            <span>New Requests</span>
            <span>New Reviews</span>
        </div>
     
      
        <div className="mask4">
        <div div className="top5">
        Top 5 Locations
        </div>
     <span className="requested_services">
        <p>Best Bertrand</p>
        <p>New Jamarcus</p>
        <p>Giannibuy</p>
        <p>Altenwerthhevan</p>
        </span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
