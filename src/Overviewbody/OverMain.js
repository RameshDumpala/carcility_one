import React from "react";
import "./OverMain.css";
import BodyComponent from "./BodyComponent";
import JobForDay from "./JobForDay";
import Activity from "./Activity";
const OverMain = () => {
  return (
    <div className="Overmain_div">
      <BodyComponent />
      <JobForDay />
      <Activity/>
    </div>
  );
};

export default OverMain;
