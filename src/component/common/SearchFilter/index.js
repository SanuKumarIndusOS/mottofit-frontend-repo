import React, { useEffect, useState, Component } from "react";
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

import IconBoxing from "assets/files/FindTrainer/DropDownAssets/Boxing_icon";
import IconPilates from "assets/files/FindTrainer/DropDownAssets/Pilates_icon";
import IconStrength from "assets/files/FindTrainer/DropDownAssets/Strength_icon";
import IconYoga from "assets/files/FindTrainer/DropDownAssets/Yoga_icon";

import IconEarlyBird from "assets/files/FindTrainer/AvaliablityDropDownAssets/EarlyBird_icon";
import IconRiseAndShine from "assets/files/FindTrainer/AvaliablityDropDownAssets/RiseShine_icon";
import IconMidDay from "assets/files/FindTrainer/AvaliablityDropDownAssets/MidDay_icon";
import IconHappyHour from "assets/files/FindTrainer/AvaliablityDropDownAssets/HappyHour_icon";
import IconNeverTooLate from "assets/files/FindTrainer/AvaliablityDropDownAssets/NeverTooLate_icon";
import { ReactComponent as AvailabilityIcon } from "assets/files/SVG/SearchBar/Availability Icon.svg";
import { ReactComponent as TrainingVerticalIcon } from "assets/files/SVG/SearchBar/Training Vertical Icon.svg";

import CROSSICON from "assets/files/FindTrainer/Cross.svg";
import { ReactComponent as BlueBoxing } from "assets/files/FindTrainer/DropDownAssets/boxing_blue.svg";
import { ReactComponent as BluePilates } from "assets/files/FindTrainer/DropDownAssets/blue_pilates.svg";
import { ReactComponent as BlueStrength } from "assets/files/FindTrainer/DropDownAssets/blue_strength.svg";
import { ReactComponent as SheduleIcon } from "assets/files/TrainerDashboard/MyEarning/Shedule Icon.svg";
import { ReactComponent as BlueYoga } from "assets/files/FindTrainer/DropDownAssets/blue_yoga.svg";
import { ReactComponent as BlueHappyHour } from "assets/files/FindTrainer/AvaliablityDropDownAssets/blue_happyHour.svg";
import { ReactComponent as BlueRiseAndShine } from "assets/files/FindTrainer/AvaliablityDropDownAssets/Rise_Shine_Active.svg";
import { ReactComponent as BlueMidDayBreak } from "assets/files/FindTrainer/AvaliablityDropDownAssets/Mid_DayBreak_Active.svg";

import { ReactComponent as BlueNeverTooLate } from "assets/files/FindTrainer/AvaliablityDropDownAssets/NeverTooLate_Active.svg";

import { ReactComponent as IconEarlyBirdActive } from "assets/files/FindTrainer/AvaliablityDropDownAssets/EarlyBird_Active.svg";

import { Toast } from "service/toast";

import Calendar from "react-calendar";

const trainingTypeIcons = [
  {
    label: "Boxing",
    icon: <BlueBoxing className="filterActiveIcon" />,
  },
  {
    label: "Pilates",
    icon: <BluePilates className="filterActiveIcon" />,
  },
  {
    label: "Strength",
    icon: <BlueStrength className="filterActiveIcon" />,
  },
  {
    label: "Yoga",
    icon: <BlueYoga className="filterActiveIcon" />,
  },
];

const availabilityIconsList = [
  {
    label: "Early Bird",
    icon: <IconEarlyBirdActive className="filterActiveIcon" />,
  },
  {
    label: "Rise & Shine",
    icon: <BlueRiseAndShine className="filterActiveIcon" />,
  },
  {
    label: "Lunchtime",
    icon: <BlueMidDayBreak className="filterActiveIcon" />,
  },

  {
    label: "MID-DAY Break",
    icon: <BlueMidDayBreak className="filterActiveIcon" />,
  },
  {
    label: "Happy Hours",
    icon: <BlueHappyHour className="filterActiveIcon" />,
  },
  {
    label: "Never too late",
    icon: <BlueNeverTooLate className="filterActiveIcon" />,
  },
];

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

  const [CalDisplay, setCalDisplay] = useState(false);
  const [CalDropdown, setCalDropdown] = useState(false);

  const handleIPCChange = (event) => {
    setIPCValue(event.target.value);
    setIPCDropdown(false);
  };

  useEffect(() => {
    console.log(type);

    console.log(activeQuery);

    if (Object.keys(activeQuery).length !== 0) {
      if (activeQuery.date === "") {
        setCalDisplay(false);
      } else {
        onChangeCal(new Date(activeQuery.date));
      }

      //setCalDisplay(true);
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
      date: CalDisplay ? moment(Calvalue).format("YYYY-MM-DD") : "",
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

    localStorage.setItem("persistFilters", JSON.stringify(payload));

    if (Location === "inPerson" && IPCvalue === "") {
      Toast({
        type: "error",
        message: "choose a city fom the 'in person' dropdown",
      });
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

  const handleClear = () => {
    setIPCValue("");
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
            <div
              className={`option_txt ${
                AvailabilityVal?.label !== "" && "fw-600"
              }`}
            >
              {AvailabilityVal?.label !== "" ? (
                <>
                  {
                    availabilityIconsList.find(
                      (val) => val.label === AvailabilityVal?.label
                    ).icon
                  }
                  {AvailabilityVal?.label}
                </>
              ) : (
                "Select a Time"
              )}{" "}
            </div>

            <>
              {AvailabilityDropdown || AvailabilityVal?.label !== "" ? (
                <div
                  className={`option_icon ${
                    AvailabilityDropdown && "option_icon_rotate"
                  }`}
                >
                  &#10094;
                </div>
              ) : (
                <AvailabilityIcon className="mr-2" />
              )}
            </>
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
                  <IconEarlyBird />
                  Early Bird <br></br> 5 AM - 8 AM
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
                  <IconRiseAndShine />
                  Rise & Shine <br></br> 8 AM - 11 AM
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
                  <IconMidDay />
                  Lunchtime <br></br> 11 AM - 2 PM
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
                  <IconMidDay />
                  MID-DAY Break <br></br> 2 PM - 5 PM
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
                  <IconHappyHour />
                  Happy Hours <br></br> 5 PM - 8 PM
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
                  <IconNeverTooLate />
                  Never too late <br></br> 8 PM - 11 PM
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
              setCalDisplay(true);
            }}
          >
            <div className={`option_txt ${CalDisplay && "fw-600"}`}>
              {CalDisplay ? (
                <>
                  <SheduleIcon className="mr-2" />
                  {moment(Calvalue).format("MM/DD/YYYY")}
                </>
              ) : (
                "Select a Date"
              )}
            </div>
            <>
              {CalDisplay ? (
                <div
                  className={`option_icon ${
                    CalDropdown && "option_icon_rotate"
                  }`}
                >
                  &#10094;
                </div>
              ) : (
                <SheduleIcon className="mr-2" />
              )}
            </>
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
              <div className="option_txt fw-600">
                {
                  trainingTypeIcons.find(
                    (val) => val.label === VerticalVal.label
                  ).icon
                }
                {VerticalVal.label}
              </div>
            )}
            <>
              {VerticalDropdown || VerticalVal?.label !== "" ? (
                <div
                  className={`option_icon ${
                    VerticalDropdown && "option_icon_rotate"
                  }`}
                >
                  &#10094;
                </div>
              ) : (
                <TrainingVerticalIcon className="mr-2" />
              )}
            </>
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
                  <IconBoxing />
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
                  <IconPilates />
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
                  <IconYoga />
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
                  <IconStrength />
                  Strength & HIIT
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="filter_type">
          <div className="filter_header">Location *</div>
          <div className="filter_options">
            {IPCvalue === "" ? (
              <>
                {Location === "virtual" ? (
                  <div className="option_txt">
                    <p className="active_bar mb-0">Virtual</p>
                    <span className="blue_bar">/</span>
                    <p
                      onClick={() => {
                        setLocation("inPerson");
                        setIPCDropdown(true);
                      }}
                      className="mb-0"
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
                      className="mb-0"
                    >
                      Virtual
                    </p>{" "}
                    <span className="blue_bar">/</span>{" "}
                    <p
                      className="active_bar mb-0"
                      onClick={() => setIPCDropdown(!IPCDropdown)}
                    >
                      {IPCvalue === "" ? "In Person" : IPCvalue}{" "}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="d-flex align-items-center mt-1 w-100">
                <p className="option_txt fw-600 mr-auto">{IPCvalue}</p>
                <img
                  src={CROSSICON}
                  alt="Cancel Location"
                  className="mb-3"
                  onClick={handleClear}
                />
              </div>
            )}
            {IPCvalue === "" && (
              <div
                className={`option_icon ${
                  Location !== "virtual" && IPCDropdown && "option_icon_rotate"
                }`}
              >
                &#10094;
              </div>
            )}
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
