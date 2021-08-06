import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BiSearch } from "react-icons/bi";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

function SearchFilter() {
  // Radio button style
  const CyanRadio = withStyles({
    root: {
      "&$checked": {
        color: cyan[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const [VerticalDropdown, setVerticalDropdown] = useState(false);
  const [VerticalVal, setVerticalVal] = useState({ label: "", value: "" });
  const [AvailabilityDropdown, setAvailabilityDropdown] = useState(false);
  const [AvailabilityVal, setAvailabilityVal] = useState({
    label: "",
    value: "",
  });
  const [Location, setLocation] = useState("virtual");
  const [IPCvalue, setIPCValue] = useState("");
  const [IPCDropdown, setIPCDropdown] = useState(true);

  const handleIPCChange = (event) => {
    setIPCValue(event.target.value);

    setIPCDropdown(false)
 
  };

  return (
    <>
      <div className="search_filter">
        <div className="search_cta">
          <div className="circle">
            <BiSearch />
          </div>
        </div>

        <div
          className="filter_type"
          className="filter_type"
          onClick={() => {
            setAvailabilityDropdown(!AvailabilityDropdown);
          }}
          tabIndex="0"
          onBlur={() => {
            setAvailabilityDropdown(false);
          }}
        >
          <div className="filter_header">Availability</div>
          <div className="filter_options">
            <div className="option_txt">
              {AvailabilityVal?.label !== ""
                ? AvailabilityVal?.label
                : "Select a Time"}{" "}
            </div>
            <div className="option_icon">&#10094;</div>
          </div>

          {AvailabilityDropdown ? (
            <div className="filter_dropdown">
              <div className="dropdown_grid">
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Early Bird",
                      value: "",
                    });
                  }}
                >
                  Early Bird
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Rise & Shine",
                      value: "",
                    });
                  }}
                >
                  Rise & Shine
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Lunchtime",
                      value: "",
                    });
                  }}
                >
                  Lunchtime
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "MID-DAY Break",
                      value: "",
                    });
                  }}
                >
                  MID-DAY Break
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Happy Hours",
                      value: "",
                    });
                  }}
                >
                  Happy Hours
                </div>
                <div
                  className="dropdown_item"
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Never too late",
                      value: "",
                    });
                  }}
                >
                  Never too late
                </div>
              </div>
            </div>
          ) : null}
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
            setVerticalDropdown(false);
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
        <div className="filter_type"  >
          <div className="filter_header">Location</div>
          <div className="filter_options">
            {Location === "virtual" ? (
              <div className="option_txt">
                <p className="active_bar">Virtual</p>
                <span className="blue_bar">/</span>
                <p
                  onClick={() => {
                    setLocation("Inperson");
                    setIPCDropdown(true);
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
                <p className="active_bar"
                 onClick={()=> setIPCDropdown(!IPCDropdown)}
               
                >
                  {IPCvalue === "" ? "In Person" : IPCvalue}{" "}
                </p>
              </div>
            )}

            <div className="option_icon"></div>
          </div>
          {Location !== "virtual" && IPCDropdown === true ? (
            <div className="city_dropdown">
              <div className="city">
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={IPCvalue}
                    onChange={handleIPCChange}
                  >
                    <FormControlLabel
                      value="New York City"
                      control={<CyanRadio />}
                      label={<div className="city">New York</div>}
                    />
                    <FormControlLabel
                      value="Miami"
                      control={<CyanRadio />}
                      label={<div className="city">MIAMI</div>}
                    />
                    <FormControlLabel
                      value="Hamptons"
                      control={<CyanRadio />}
                      label={<div className="city">HAMPTONS</div>}
                    />
                    <FormControlLabel
                      value="Palm Beach"
                      control={<CyanRadio />}
                      label={<div className="city">PALM BEACH</div>}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
