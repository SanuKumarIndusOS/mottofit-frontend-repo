import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BiSearch } from "react-icons/bi";
import { history } from "helpers";
import moment from "moment";

import { connect } from "react-redux";
import { trainerSearchFilters } from "action/trainerAct";
import { bindActionCreators } from "redux";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

import { Toast } from "service/toast";

import Calendar from "react-calendar";

function SearchFilter({
  trainerSearchFilters,
  searchAction,
  type,
  activeQuery,
}) {
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

  const [Calvalue, onChangeCal] = useState(new Date());
  const [CalDropdown, setCalDropdown] = useState(false);

  const handleIPCChange = (event) => {
    setIPCValue(event.target.value);
    setIPCDropdown(false);
  };

  useEffect(() => {
    console.log(type);

    console.log(activeQuery);

    if (Object.keys(activeQuery).length !== 0) {
      onChangeCal(new Date(activeQuery.date));
      setLocation(activeQuery.location);
      if (activeQuery.city !== undefined) {
        setIPCValue(activeQuery.city);
        setIPCDropdown(false);
      }

      setVerticalVal(activeQuery.label.trainingType);
      setAvailabilityVal(activeQuery.label.availability);
    }
  }, []);

  useEffect(() => {
    setCalDropdown(false);
  }, [Calvalue]);

  const applyFilters = () => {
    let payload = {
      location: Location,
      city: Location === "inPerson" ? IPCvalue || "" : "",
      trainingType:
        VerticalVal.value === ""
          ? JSON.stringify([])
          : encodeURIComponent(JSON.stringify([VerticalVal.value])),
      date: moment(Calvalue).format("YYYY-MM-DD"),
      availability:
        AvailabilityVal.value === ""
          ? JSON.stringify([])
          : JSON.stringify([AvailabilityVal.value]),
      label: {
        availability: AvailabilityVal,
        trainingType: VerticalVal,
      },
    };

    console.log(payload);

    if (Location === "inPerson" && IPCvalue === "") {
      Toast({ type: "error", message: "City is mandatory" });
    } else {
      trainerSearchFilters(payload);

      type === "find"
        ? getFilteredTrainer(payload)
        : history.push("trainer/find");
    }
  };

  const getFilteredTrainer = (payload) => {
    console.log("mihit");
    searchAction(payload);
  };

  return (
    <div className="wrapper">
      <div className="search_filter">
        <div className="search_cta">
          <div className="circle" onClick={applyFilters}>
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
                   className={
                    AvailabilityVal.label === "Early Bird"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Early Bird",
                      value: "EarlyBird",
                    });
                  }}
                >
                  Early Bird
                </div>
                <div
                  className={
                    AvailabilityVal.label === "Rise & Shine"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Rise & Shine",
                      value: "RiseAndShine",
                    });
                  }}
                >
                  Rise & Shine
                </div>
                <div
                 className={
                  AvailabilityVal.label === "Lunchtime"
                    ? "dropdown_item item_active"
                    : "dropdown_item"
                }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Lunchtime",
                      value: "MidDayBreak1",
                    });
                  }}
                >
                  Lunchtime
                </div>
                <div
                   className={
                    AvailabilityVal.label === "MID-DAY Break"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "MID-DAY Break",
                      value: "MidDayBreak2",
                    });
                  }}
                >
                  MID-DAY Break
                </div>
                <div
                 className={
                  AvailabilityVal.label === "Happy Hours"
                    ? "dropdown_item item_active"
                    : "dropdown_item"
                }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Happy Hours",
                      value: "HappyHours",
                    });
                  }}
                >
                  Happy Hours
                </div>
                <div
                 className={
                  AvailabilityVal.label === "Never too late"
                    ? "dropdown_item item_active"
                    : "dropdown_item"
                }
                  onClick={() => {
                    setAvailabilityVal({
                      ...AvailabilityVal,
                      label: "Never too late",
                      value: "NeverTooLate",
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
          <div
            className="filter_options"
            onClick={() => {
              setCalDropdown(!CalDropdown);
            }}
          >
            <div className="option_txt">
              {moment(Calvalue).format("YYYY/MM/DD")}
            </div>

            <div className="option_icon">&#10094;</div>
          </div>
          {CalDropdown ? (
            <div className="calendar_dropdown">
              <Calendar
                onChange={onChangeCal}
                value={Calvalue}
                minDate={new Date()}
              />
            </div>
          ) : null}
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
                  className={
                    VerticalVal.label === "Boxing"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Boxing",
                      value: "Boxing",
                    });
                  }}
                >
                  Boxing
                </div>
                <div
                  className={
                    VerticalVal.label === "Pilates"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
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
                  className={
                    VerticalVal.label === "Yoga"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
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
                  className={
                    VerticalVal.label === "Strength"
                      ? "dropdown_item item_active"
                      : "dropdown_item"
                  }
                  onClick={() => {
                    setVerticalVal({
                      ...VerticalVal,
                      label: "Strength",
                      value: "Strength & HIIT",
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
                    setLocation("inPerson");
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
                <p
                  className="active_bar"
                  onClick={() => setIPCDropdown(!IPCDropdown)}
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
                    aria-label="city"
                    name="city"
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
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerSearchFilters,
    },
    dispatch
  );
};

const _SearchFilter = connect(null, mapDispatchToProps)(SearchFilter);

export default _SearchFilter;
