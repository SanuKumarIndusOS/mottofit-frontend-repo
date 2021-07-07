import React, { useState, useEffect } from "react";
import "./style.scss";
import { BiSearch } from "react-icons/bi";
import Between from "../../../assets/files/Home/Banner/SearchBar/between.svg";
import AvailabilityIcon from "../../../assets/files/Home/Banner/SearchBar/Availability Icon.svg";
import SheduleIcon from "../../../assets/files/Home/Banner/SearchBar/Shedule Icon.svg";
import TrainerVerticalIcon from "../../../assets/files/Home/Banner/SearchBar/Training Vertical Icon.svg";
import Dropdown from "./Dropdown";
import DropdownAvailability from "./DropdownAvailability";
import InPersonDropDown from "./InPersonDropDown";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { connect } from "react-redux";
import { updateTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { history } from "helpers";
import { getFormatDate } from "service/helperFunctions";
import { useHistory } from "react-router-dom";
import { Toast } from "service/toast";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import moment from "moment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import arrowSign from "assets/files/SVG/Arrow Next.svg";

const BannerFC = ({ trainerQueryData, updateTrainerDetails }) => {
  //Responsive search
  const [Calvalue, onChangeCal] = useState(new Date());
  const [IPCvalue, setIPCValue] = useState("");
  const [Avalvalue, setAvalValue] = useState("");
  const [VerticalVal, setVerticalVal] = useState("");
  const [LocationVal, setLocationVal] = useState("virtual");

  const handleIPCChange = (event) => {
    setIPCValue(event.target.value);
  };

  const handleAvalChange = (event) => {
    setAvalValue(event.target.value);
  };

  // Desktop
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  const [DropdownState, setDropdownState] = useState(false);

  const [DropdownAvailabilityState, setDropdownAvailabilityState] = useState(
    false
  );
  const [InPersonDD, setInPersonDD] = useState(false);

  const [virtualMarkup, setvirtualMarkup] = useState(
    <h2 style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</h2>
  );
  const [inPersonMarkup, setinPersonMarkup] = useState(
    <h2 style={{ fontWeight: "normal" }}>In Person</h2>
  );
  const [queryObject, setqueryObject] = useState({
    location: "virtual",
    vertical: "",
    date: "",
    availability: "",
    // inPerson: "In Person",
  });
  const [date, setDate] = useState(new Date());
  const [showMenu, setshowMenu] = useState(false);

  const [inPerson, setInPerson] = useState({
    newYork: { value: "New York City", selected: false, name: "newYork" },
    miami: { value: "Miami", selected: false, name: "miami" },
    hamptons: { value: "Hamptons", selected: false, name: "hamptons" },
    palmBeach: { value: "Palm Beach", selected: false, name: "palmBeach" },
  });

  const handleChange = (value) => {
    let tempData = {
      newYork: { value: "New York City", selected: false },
      miami: { value: "Miami", selected: false },
      hamptons: { value: "Hamptons", selected: false },
      palmBeach: { value: "Palm Beach", selected: false },
    };

    tempData[value] = {
      ...tempData[value],
      selected: true,
    };

    setInPerson(tempData);

    TriggerInPersonDropDown();
  };

  //Training_type_dropdown
  let DropdownTraining;
  if (DropdownState) {
    DropdownTraining = (
      <Dropdown
        onClick={({ vertical }) => {
          setqueryObject({ ...queryObject, vertical });
          TriggerVerticalDropDown();
        }}
        selectedData={queryObject.vertical?.value}
      />
    );
  } else {
    <div>hello</div>;
  }

  const SetLocation = (value) => {
    if (value === "Virtual") {
      setvirtualMarkup(
        <h2 style={{ borderBottom: "3px solid #53BFD2", margin: "0" }}>
          Virtual
        </h2>
      );
      setinPersonMarkup(<h2 style={{ fontWeight: "normal" }}>In Person</h2>);

      setqueryObject({ ...queryObject, location: "virtual" });
    } else {
      setvirtualMarkup(
        <h2 style={{ fontWeight: "normal", margin: "0" }}>Virtual</h2>
      );
      setinPersonMarkup(
        <h2 style={{ borderBottom: "3px solid #53BFD2", width: "88px" }}>
          In Person
        </h2>
      );
      setqueryObject({ ...queryObject, location: "inPerson" });
    }
  };

  //availabilty_dropdown
  let DropdownHomeAvailability;
  if (DropdownAvailabilityState) {
    DropdownHomeAvailability = (
      <DropdownAvailability
        onClick={({ availability }) => {
          setqueryObject({ ...queryObject, availability });
          TriggerDropDownAvailability();
        }}
        selectedData={queryObject.availability?.value}
      />
    );
  } else {
    <div>hello</div>;
  }
  //inPerson_dropdown
  let DropdownHomeInPerson;
  if (InPersonDD) {
    DropdownHomeInPerson = (
      <InPersonDropDown
        onClick={({ inPerson }) => {
          setqueryObject({ ...queryObject, inPerson });
          TriggerInPersonDropDown();
        }}
        handleChange={handleChange}
        inPerson={inPerson}
        type="banner"
      />
    );
  } else {
    <div>hello</div>;
  }

  const TriggerDropDownAvailability = () => {
    setDropdownAvailabilityState(!DropdownAvailabilityState);
  };
  const TriggerInPersonDropDown = () => {
    setInPersonDD(!InPersonDD);
  };

  const TriggerVerticalDropDown = () => {
    setDropdownState(!DropdownState);
  };

  const search_action = () => {
    let payload = {
      query: {
        location: queryObject.location,
        date: getFormatDate(date, "YYYY-MM-DD"),
        trainingType: queryObject.vertical,
        availability: queryObject.availability,
        // inPerson: queryObject.inPerson,
        city:
          Object.values(inPerson).filter(({ selected }) => selected)[0]
            ?.value || "",
      },
    };

    if (queryObject.location === "inPerson" && !payload.query.city) {
      setInPersonDD(true);

      return Toast({ type: "error", message: "City is mandatory" });
    }

    console.log(payload, "payload");
    updateTrainerDetails(payload);

    history.push("/trainer/find");
  };

  const search_action_mob = () => {
    let payload = {
      query: {
        location: queryObject.location,
        date: moment(Calvalue).format("YYYY-MM-DD"),
        trainingType: { label: VerticalVal, value: VerticalVal },
        availability: Avalvalue,
        // inPerson: queryObject.inPerson,
        city: IPCvalue || "",
      },
    };

    if (queryObject.location === "inPerson" && !payload.query.city) {
      setInPersonDD(true);

      return Toast({ type: "error", message: "City is mandatory" });
    }

    updateTrainerDetails(payload);

    history.push("/trainer/find");
  };

  let selectedValue =
    Object.values(inPerson).filter(({ selected }) => selected)[0]?.value || "";

  return (
    <div
      className="background"
      onClick={() => {
        console.log("hit");

        //Availability Dropdown
        if (DropdownAvailabilityState) {
          setDropdownAvailabilityState(!DropdownAvailabilityState);
        }

        //TrainingType DropDown
        if (DropdownState) {
          setDropdownState(!DropdownState);
        }

        //Inperson DropDown
        if (InPersonDD) {
          setInPersonDD(!InPersonDD);
        }
      }}
    >
      <div className="cntr_cotainer">
        <div className="heading_items">
          <h2 className="heading_txt">Train with the Best</h2>
          <p className="sub_heading_txt">
            Discover & book trusted personal trainers for Strength & HIIT,
            Boxing, Yoga & Pilates
          </p>
        </div>

        <div className="card-box ">
          <div className="card-wrapper_home">
            <div className="item1">
              <h3>Location</h3>
              <div className="card_item_home">
                <div className="custom_dropdown">
                  <div
                    onClick={() => {
                      SetLocation("Virtual");
                      setInPersonDD(false);
                    }}
                  >
                    {virtualMarkup}
                  </div>
                  <img src={Between} alt="icon" />
                  <div
                    onClick={() => SetLocation("")}
                    className="position-realtive"
                  >
                    <h6
                      onClick={TriggerInPersonDropDown}
                      className={`${selectedValue ? "in-person-option" : ""} `}
                    >
                      {inPersonMarkup}
                      <span>{selectedValue}</span>
                    </h6>
                    <div className="card_item_home">
                      <div className="custom_dropdown">
                        <h2>{`${queryObject.inPerson || ""}`}</h2>
                      </div>
                      <div
                        className={`home_dropdown ${
                          selectedValue ? "option-selected" : ""
                        }`}
                      >
                        {DropdownHomeInPerson}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LineBetween />
            <div className="item2">
              <h3>Training Type</h3>
              <div className="card_item_home">
                <div
                  className="custom_dropdown"
                  onClick={TriggerVerticalDropDown}
                >
                  <h2>{`${
                    queryObject.vertical?.label || "Select a Category"
                  }`}</h2>
                  <img src={TrainerVerticalIcon} ali="icon" />
                </div>
                <div className="home_dropdown">{DropdownTraining}</div>
              </div>
            </div>
            <LineBetween />
            <div className="item3">
              <h3>Schedule</h3>
              <div className="card_item_home_item3 mt-2">
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  locale={enGB}
                  startDate={new Date()}
                  style={{ height: "100px" }}
                  format="MM/dd/yyyy"
                >
                  {({ inputProps, focused }) => (
                    <input
                      className={"input" + (focused ? " -focused" : "")}
                      {...inputProps}
                    />
                  )}
                </DatePicker>

                <img src={SheduleIcon} ali="icon" />
              </div>
            </div>
            <LineBetween />
            <div className="item4">
              <h3>Availability</h3>
              <div className="card_item_home">
                <div
                  className="custom_dropdown"
                  onClick={TriggerDropDownAvailability}
                >
                  <h2>{`${
                    queryObject.availability?.label || "Select a Time"
                  }`}</h2>
                  <img src={AvailabilityIcon} ali="icon" />
                </div>
                <div className="home_dropdown">{DropdownHomeAvailability}</div>
              </div>
            </div>
            <div className="item5">
              <button className="circle" onClick={search_action}>
                <BiSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="mobile-search">
          <div
            className="mobile-search-card"
            onClick={() => {
              console.log("Hit");
              setshowMenu(!showMenu);
            }}
          >
            <div className="mobile-search-txt">Find Your Trainer</div>
            <div className="mobile-search-icon">
              <BiSearch />
            </div>
          </div>
        </div>

        <div
          className="mobile-search-menu"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <div className="header">
            <div className="title">Find Your Best Match</div>
            <div
              className="close"
              onClick={() => {
                setshowMenu(!showMenu);
              }}
            >
              x
            </div>
          </div>
          <div className="content">
            <div
              className="clear-filters"
              onClick={() => {
                setLocationVal("virtual");
                setIPCValue("");
                setVerticalVal("");
                setAvalValue("");
                onChangeCal(new Date());
              }}
            >
              Clear All Filters
            </div>

            <div className="location">
              <div className="accheader">
                Location <img src={arrowSign}></img>
              </div>

              {LocationVal === "virtual" ? (
                <div className="element">
                  <div
                    className="sel"
                    onClick={() => {
                      setLocationVal("virtual");
                    }}
                  >
                    Virtual
                  </div>
                  <div className="slash">/</div>
                  <div
                    onClick={() => {
                      setLocationVal("inPerson");
                    }}
                  >
                    In Person
                  </div>
                </div>
              ) : (
                <div className="element">
                  <div
                    onClick={() => {
                      setLocationVal("virtual");
                    }}
                  >
                    Virtual
                  </div>
                  <div className="slash">/</div>
                  <div
                    className="sel"
                    onClick={() => {
                      setLocationVal("inPerson");
                    }}
                  >
                    In Person
                  </div>
                </div>
              )}
              {LocationVal === "inPerson" ? (
                <div>
                  <FormControl component="fieldset">
                    {/* {IPCvalue} */}
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={IPCvalue}
                      onChange={handleIPCChange}
                    >
                      <FormControlLabel
                        value="New York City"
                        control={<Radio />}
                        label="NEW YORK"
                      />
                      <FormControlLabel
                        value="Miami"
                        control={<Radio />}
                        label="MIAMI"
                      />
                      <FormControlLabel
                        value="Hamptons"
                        control={<Radio />}
                        label="HAMPTONS"
                      />
                      <FormControlLabel
                        value="Palm Beach"
                        control={<Radio />}
                        label="PALM BEACH"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              ) : null}

              <hr></hr>
            </div>

            <div className="vertical">
              <div> Training Vertical</div>
              {/* {VerticalVal} */}
              <div className="listv">
                {VerticalVal !== "Strength & HIIT" || VerticalVal === "" ? (
                  <div
                    className="litem"
                    onClick={() => {
                      setVerticalVal("Strength & HIIT");
                    }}
                  >
                    STRENGTH
                  </div>
                ) : (
                  <div
                    className="litem_active"
                    onClick={() => {
                      setVerticalVal("");
                    }}
                  >
                    STRENGTH
                  </div>
                )}

                {VerticalVal !== "Boxing" || VerticalVal === "" ? (
                  <div
                    className="litem"
                    onClick={() => {
                      setVerticalVal("Boxing");
                    }}
                  >
                    BOXING
                  </div>
                ) : (
                  <div
                    className="litem_active"
                    onClick={() => {
                      setVerticalVal("");
                    }}
                  >
                    BOXING
                  </div>
                )}

                {VerticalVal !== "Yoga" || VerticalVal === "" ? (
                  <div
                    className="litem"
                    onClick={() => {
                      setVerticalVal("Yoga");
                    }}
                  >
                    YOGA
                  </div>
                ) : (
                  <div
                    className="litem_active"
                    onClick={() => {
                      setVerticalVal("");
                    }}
                  >
                    YOGA
                  </div>
                )}

                {VerticalVal !== "Pilates" || VerticalVal === "" ? (
                  <div
                    className="litem"
                    onClick={() => {
                      setVerticalVal("Pilates");
                    }}
                  >
                    PILATES
                  </div>
                ) : (
                  <div
                    className="litem_active"
                    onClick={() => {
                      setVerticalVal("");
                    }}
                  >
                    PILATES
                  </div>
                )}
              </div>

              <hr></hr>
            </div>
            <div className="schedule">
              Schedule <br></br> {moment(Calvalue).format("YYYY/MM/DD")}
              <Calendar onChange={onChangeCal} value={Calvalue} />
              <hr></hr>
            </div>
            <div className="availability">
              <div>Availability</div>
              {Avalvalue} <br></br>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="availability"
                  value={Avalvalue}
                  onChange={handleAvalChange}
                >
                  <FormControlLabel
                    value="EarlyBird"
                    control={<Radio />}
                    label="EARLY BIRD (5AM-8AM)"
                  />
                  <FormControlLabel
                    value="RiseAndShine"
                    control={<Radio />}
                    label="RISE & SHINE (8AM-11AM)"
                  />
                  <FormControlLabel
                    value="MidDayBreak1"
                    control={<Radio />}
                    label="MID-DAY BREAK (11:30AM-2PM)"
                  />
                  <FormControlLabel
                    value="MidDayBreak2"
                    control={<Radio />}
                    label="MID-DAY LUNCHTIME (2AM-5PM)"
                  />
                  <FormControlLabel
                    value="HappyHours"
                    control={<Radio />}
                    label="HAPPY HOUR (5PM-8PM)"
                  />
                  <FormControlLabel
                    value="NeverTooLate"
                    control={<Radio />}
                    label="NEVER TOO LATE (8PM-11PM)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="search" onClick={search_action_mob}>
            APPLY ALL FILTERS{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

function LineBetween() {
  return (
    <div className="line">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="55"
        viewBox="0 0 2 55"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          y2="55"
          transform="translate(1)"
          fill="none"
          stroke="#eaeaea"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
function DropDownSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.118"
      height="7.809"
      viewBox="0 0 14.118 7.809"
    >
      <path
        id="Drop_Down_3"
        data-name="Drop Down 3"
        d="M12,0,6,6,0,0"
        transform="translate(1.061 1.061)"
        fill="none"
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const mapStateToProps = (state) => ({
  trainerQueryData: state.trainerReducer.query,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetails,
    },
    dispatch
  );
};

const Banner = connect(mapStateToProps, mapDispatchToProps)(BannerFC);

export default Banner;
