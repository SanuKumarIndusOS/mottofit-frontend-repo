import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BiSearch } from "react-icons/bi";

function SearchFilter() {
  const [VerticalDropdown, setVerticalDropdown] = useState(false);
  const [VerticalVal, setVerticalVal] = useState({ label: "", value: "" });
  const [AvailabilityDropdown, setAvailabilityDropdown] = useState(false);
  const [Location, setLocation] = useState("virtual");

  return (
    <>
      <div className="search_filter">
        <div className="search_cta">
          <div className="circle">
            <BiSearch />
          </div>
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
            {VerticalVal?.label === "" ? (
              <div className="option_txt"> Select a Category</div>
            ) : (
              <div className="option_txt">{VerticalVal.label}</div>
            )}
            <div className="option_icon">&#10094;</div>
          </div>
          {VerticalDropdown ? (
            <div className="filter_dropdown">
              <div className="dropdown_grid">
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Boxing",
                      value: "boxing",
                    });
                  }}
                >
                  Boxing
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Pilates",
                      value: "Pilates",
                    });
                  }}
                >
                  Pilates
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Yoga",
                      value: "Yoga",
                    });
                  }}
                >
                  Yoga
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Strength",
                      value: "Strength",
                    });
                  }}
                >
                  Strength
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="filter_type">
          <div className="filter_header">Location</div>
          <div className="filter_options">
            {Location === "virtual" ? (
              <div className="option_txt">
                <p className="active_bar">Virtual</p>
                <span className="blue_bar">/</span>
                <p
                  onClick={() => {
                    setLocation("Inperson");
                  }}
                >
                  In Person
                </p>
              </div>
            ) : (
              <div className="option_txt">
                <p
                  onClick={() => {
                    setLocation("virtual");
                  }}
                >
                  Virtual
                </p>{" "}
                <span className="blue_bar">/</span>{" "}
                <p className="active_bar">In Person</p>
              </div>
            )}

            <div className="option_icon"></div>
          </div>
          {Location !== "virtual" ? (
            <div className="city_dropdown">
              <div className="city">
                <input type="radio"></input> New York
              </div>
              <div className="city">
                <input type="radio"></input> Miami
              </div>
              <div className="city">
                <input type="radio"></input> Hamptons
              </div>
              <div className="city">
                <input type="radio"></input> Palm Beach
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
