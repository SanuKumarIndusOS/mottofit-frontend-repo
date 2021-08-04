import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BiSearch } from "react-icons/bi";

function SearchFilter() {
  const [VerticalDropdown, setVerticalDropdown] = useState(false);
  const [AvailabilityDropdown, setAvailabilityDropdown] = useState(false);
  
  
  return (
    <>
      <div className="search_filter">
        <div className="search_cta">
          <div className="circle"><BiSearch/></div>
        </div>

        <div className="filter_type">
          <div className="filter_header">Availability</div>
          <div className="filter_options">
            <div className="option_txt">Select a Time</div>
            <div className="option_icon">&#10094;</div>
          </div>
        </div>
        <div className="filter_type">
          <div className="filter_header">Schedule</div>
          <div className="filter_options">
            <div className="option_txt">Select a Date</div>
            <div className="option_icon">&#10094;</div>
          </div>
        </div>
        <div
          className="filter_type"
          onClick={() => {
            setVerticalDropdown(!VerticalDropdown);
          }}
          tabIndex="0"
          onBlur={() => {
            setVerticalDropdown(!VerticalDropdown);
          }}
        >
          <div className="filter_header">Training Type</div>
          <div className="filter_options">
            <div className="option_txt">Select a Category</div>
            <div className="option_icon">&#10094;</div>
          </div>
          {VerticalDropdown ? (
            <div className="filter_dropdown">
              <div className="dropdown_grid">
                <div className="dropdown_item">Boxing</div>
                <div className="dropdown_item">Pilates</div>
                <div className="dropdown_item">Yoga</div>
                <div className="dropdown_item">Strength</div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="filter_type">
          <div className="filter_header">Location</div>
          <div className="filter_options">
            <div className="option_txt">Select a Time</div>
            <div className="option_icon"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
