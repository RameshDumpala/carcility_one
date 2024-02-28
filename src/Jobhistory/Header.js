import React from "react";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbArrowsUpDown } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";
import { MdMap } from "react-icons/md";

const Header = () => {
  return (
    <div className="mainheader_div">
      <div className="grop">
        <span className="job">Job History</span>
        <div className="main_groups">
          <div className="grop_1">
            <span>
              <TbArrowsUpDown  className="icon"/>
            </span>
            <span>Sort</span>
            <span>
              <RiArrowDropDownLine className="drop_icon" />
            </span>
          </div>
          <div className="grop_1">
            <span>
              <MdFilterList />
            </span>
            <span>Filter</span>
            <span>
              <RiArrowDropDownLine className="drop_icon" />
            </span>
          </div>
          <div className="grop_1">
            <span>
              <MdMap />
            </span>
            <span>Map</span>
          
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
