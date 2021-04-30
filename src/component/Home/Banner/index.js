import React, { useState } from "react";
import "./style.scss";

import { BiSearch } from "react-icons/bi";
import Between from "../../../assets/files/Home/Banner/SearchBar/between.svg";
import AvailabilityIcon from "../../../assets/files/Home/Banner/SearchBar/Availability Icon.svg";
import SheduleIcon from "../../../assets/files/Home/Banner/SearchBar/Shedule Icon.svg";
import TrainerVerticalIcon from "../../../assets/files/Home/Banner/SearchBar/Training Vertical Icon.svg";
import Dropdown from "./Dropdown";
import DropdownAvailability from "./DropdownAvailability";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { connect } from "react-redux";
import { updateTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { history } from "helpers";
import { getFormatDate } from "service/helperFunctions";

const BannerFC = ({ trainerQueryData, updateTrainerDetails }) => {
  const [DropdownState, setDropdownState] = useState(false);
  const [DropdownValue, setDropdownValue] = useState([]);

  const [DropdownAvailabilityState, setDropdownAvailabilityState] = useState(
    false
  );
  const [DropdownAvailabilityValue, setDropdownAvailabilityValue] = useState(
    []
  );

  const [virtualMarkup, setvirtualMarkup] = useState(
    <h2 style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</h2>
  );
  const [inPersonMarkup, setinPersonMarkup] = useState(
    <h2 style={{ fontWeight: "normal" }}>In Person</h2>
  );
  const [queryObject, setqueryObject] = useState({
    location: "Online",
    vertical: "Boxing",
    date: "",
    availability: "EarlyBird",
  });
  const [date, setDate] = useState(new Date());
  const onClickHandle = () => {
    setDate(date);
    console.log(date);
  };
  let DropdownTraining;
  if (DropdownState) {
    DropdownTraining = (
      <Dropdown
        onClick={({ vertical }) => {
          setqueryObject({ ...queryObject, vertical });
          TriggerVerticalDropDown();
        }}
      />
    );
  } else {
    <div>hello</div>;
  }

  const SetLocation = (value) => {
    console.log(value);

    if (value === "Virtual") {
      setvirtualMarkup(
        <h2 style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</h2>
      );
      setinPersonMarkup(<h2 style={{ fontWeight: "normal" }}>In Person</h2>);

      setqueryObject({ ...queryObject, location: "Online" });
    } else {
      setvirtualMarkup(<h2 style={{ fontWeight: "normal" }}>Virtual</h2>);
      setinPersonMarkup(
        <h2 style={{ borderBottom: "3px solid #53BFD2" }}>In Person</h2>
      );
      setqueryObject({ ...queryObject, location: "Person" });
    }
  };

  let DropdownHomeAvailability;
  if (DropdownAvailabilityState) {
    DropdownHomeAvailability = (
      <DropdownAvailability
        onClick={({ availability }) => {
          setqueryObject({ ...queryObject, availability });
          TriggerDropDownAvailability();
        }}
      />
    );
  } else {
    <div>hello</div>;
  }

  const TriggerDropDownAvailability = () => {
    setDropdownAvailabilityState(!DropdownAvailabilityState);
    setDropdownAvailabilityValue("Boxing");
    console.log(DropdownAvailabilityState);
  };

  const TriggerVerticalDropDown = () => {
    setDropdownState(!DropdownState);
    setDropdownValue("Boxing");
    console.log(DropdownState);
  };

  const search_action = () => {
    let payload = {
      query: {
        location: queryObject.location,
        date: getFormatDate(date, "YYYY-MM-DD"),
        trainingType: queryObject.vertical,
        availability: queryObject.availability,
      },
    };

    console.log(payload);

    updateTrainerDetails(payload);

    history.push("/trainer/find");
  };
  return (
    <div className="background">
      <div className="cntr_cotainer">
        <div className="heading_items">
          <h2 className="heading_txt">Train with the Best</h2>
          <p className="sub_heading_txt">
            Discover & book trusted personal trainers for
            <br />
            Strength & HIIT, Boxing, Yoga & Pilates
          </p>
        </div>
        <div className="card-box ">
          <div className="card-wrapper_home">
            <div className="item1">
              <h3>Location</h3>
              <div className="card_item_home">
                <div className="custom_dropdown">
                  <div onClick={() => SetLocation("Virtual")}>
                    {virtualMarkup}
                  </div>
                  <img src={Between} ali="icon" />
                  <div onClick={() => SetLocation("InPerson")}>
                    {inPersonMarkup}
                  </div>
                </div>
              </div>
            </div>
            <LineBetween />
            <div className="item2">
              <h3>Training Vertical</h3>
              <div className="card_item_home">
                <div
                  className="custom_dropdown"
                  onClick={TriggerVerticalDropDown}
                >
                  <h2>{`${queryObject.vertical || "Select a Category"}`}</h2>
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
                  <h2>{`${queryObject.availability || "Select a Time"}`}</h2>
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
