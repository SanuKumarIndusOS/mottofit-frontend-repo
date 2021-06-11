import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "./find.scss";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import HoverImage from "react-hover-image";
import InPersonDropDown from "./InPersonDropDown";

//Assets for Inactive
import BoxingIcon from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Inactive.svg";
import PilatesIcon from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Inactive.svg";
import StrengthIcon from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Inactive.svg";
import YogaIcon from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Inactive.svg";

// Assets when hoveded
import BoxingIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Active.svg";
import PilatesIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Active.svg";
import StrengthIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Active.svg";
import YogaIconIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Active.svg";

import TrainerCards from "../TrainersDetails/index";
import TrainerCardOutside from "../TrainerOutsideTime/index";
import Weight from "../../../assets/files/SVG/findTrainer/weight.svg";
import SheduleIcon from "../../../assets/files/Home/Banner/SearchBar/Shedule Icon.svg";
import AvailabilityIcon from "../../../assets/files/Home/Banner/SearchBar/Availability Icon.svg";
import DropdownTrainerAvailability from "./DropdownTrainerAvailability";
import "./find.scss";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrainerDetails } from "action/trainerAct";
import { getFormatDate } from "service/helperFunctions";
const FindTrainerFC = ({ trainerQueryData, updateTrainerDetails }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (trainerQueryData.location && trainerQueryData.date) {
      let payload = {
        query: {
          location: trainerQueryData?.location,
          vertical: trainerQueryData?.trainingType,
          date: getFormatDate(),
          availability: trainerQueryData?.availability,
        },
      };

      console.log("logged...", payload);

      setqueryObject(payload.query);
      getTrainerDataByQuery();
      // setqueryObject(trainerQueryData);
      // SetLocation(trainerQueryData.location);
    } else {
      let payload = {
        query: {
          location: "Online",
          vertical: "Boxing",
          date: getFormatDate(),
          availability: "EarlyBird",
        },
      };
      setqueryObject(payload.query);

      updateTrainerDetails(payload);
    }
  }, []);

  const [bestMatchData, setbestMatchData] = useState([]);
  const [bestOthersData, setbestOthersData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [DropdownState, setDropdownState] = useState(false);
  const [
    DropdownTrainerAvailabilityState,
    setDropdownTrainerAvailabilityState,
  ] = useState(false);
  const [InPersonDD, setInPersonDD] = useState(false);

  const [ddBoxingState, setddBoxingState] = useState(false);
  const [ddPilatesState, setddPilatesState] = useState(false);
  const [ddYogaState, setddYogaState] = useState(false);
  const [ddHiitState, setddHiitState] = useState(false);
  const [queryObject, setqueryObject] = useState({
    location: "Online",
    vertical: "Select a Category",
    date: "",
    availability: "Select a Time",
    // inPerson: "In Person",
  });

  const bestMatchRef = useRef(null);
  const otherRef = useRef(null);

  const onClickHandle = () => {
    setSelectedDate(selectedDate);
  };

  // Dropdown for availability
  let DropdownAvailability;
  if (DropdownTrainerAvailabilityState) {
    DropdownAvailability = (
      <DropdownTrainerAvailability
        onClick={({ availability }) => {
          setqueryObject({ ...queryObject, availability });
          TriggerDropDownTrainerAvailability();
        }}
      />
    );
  } else {
    <div></div>;
  }

  const TriggerDropDownTrainerAvailability = () => {
    setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
  };

  let Dropdown;

  if (DropdownState) {
    Dropdown = (
      <div className="box_3_active_trainer">
        <div className="dd_row_one">
          <div
            className="option"
            onClick={() => {
              setddBoxingState(!ddBoxingState);
              setDropdownState(!DropdownState);
              setqueryObject({
                ...queryObject,
                vertical: "Boxing",
              });
            }}
          >
            <div className="option_wapper">
              <HoverImage src={BoxingIcon} hoverSrc={BoxingIconActive} />
              <h2>Boxing</h2>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setddPilatesState(!ddPilatesState);
              setDropdownState(!DropdownState);
              setqueryObject({
                ...queryObject,
                vertical: "Pilates",
              });
            }}
          >
            <div className="option_wapper">
              <HoverImage src={PilatesIcon} hoverSrc={PilatesIconActive} />
              <h2>Pilates</h2>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className="option"
            onClick={() => {
              setddHiitState(!ddHiitState);
              setqueryObject({
                ...queryObject,
                vertical: "Strength & Hiit",
              });
              setDropdownState(!DropdownState);
            }}
          >
            <div className="option_wapper">
              <HoverImage src={StrengthIcon} hoverSrc={StrengthIconActive} />
              <h2>Strength & Hiit</h2>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setddYogaState(!ddYogaState);
              setqueryObject({
                ...queryObject,
                vertical: "Yoga",
              });
              setDropdownState(!DropdownState);
            }}
          >
            <div className="option_wapper">
              <HoverImage src={YogaIcon} hoverSrc={YogaIconIconActive} />
              <h2>Yoga</h2>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Dropdown = <div className="box_3_inactive"></div>;
  }

  const TriggerVerticalDropDown = () => {
    setDropdownState(!DropdownState);
  };

  const [virtualMarkup, setvirtualMarkup] = useState(
    <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
  );
  const [inPersonMarkup, setinPersonMarkup] = useState(
    <p style={{ fontWeight: "normal" }}>In Person</p>
  );

  const SetLocation = (value) => {
    if (value === "Online" || value === "Virtual") {
      setvirtualMarkup(
        <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
      );
      setinPersonMarkup(<p style={{ fontWeight: "normal" }}>In Person</p>);

      setqueryObject({ ...queryObject, location: "Online" });
    } else {
      setvirtualMarkup(<p style={{ fontWeight: "normal" }}>Virtual</p>);
      setinPersonMarkup(
        <p style={{ borderBottom: "3px solid #53BFD2" }}>In Person</p>
      );
      setqueryObject({ ...queryObject, location: "Person" });
      setInPersonDD(!InPersonDD);
    }
  };

  const search_action = () => {
    let payload = {
      query: {
        location: queryObject.location,
        date: queryObject.date,
        trainingType: queryObject.vertical,
        availability: queryObject.availability,
        // inPerson: queryObject.inPerson,
      },
    };

    updateTrainerDetails(payload);

    getTrainerDataByQuery(payload.query);
  };

  const getTrainerDataByQuery = (currData) => {
    const { location, date, trainingType, availability } =
      currData || trainerQueryData;

    const { trainerAvailableApi } = TrainerApi;

    trainerAvailableApi.query.location = location;
    trainerAvailableApi.query.trainingType = trainingType;
    trainerAvailableApi.query.date = date;
    trainerAvailableApi.query.availability = availability;

    api({ ...trainerAvailableApi }).then(({ data }) => {
      setbestMatchData(data.bestMatch);
      setbestOthersData(data.others);

      if (data.bestMatch.length > 0) {
        return bestMatchRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (data.others.length > 0) {
        return otherRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  //inPerson_dropdown
  let DropdownHomeInPerson;
  if (InPersonDD) {
    DropdownHomeInPerson = (
      <InPersonDropDown
        onClick={({ inPerson }) => {
          setqueryObject({ ...queryObject, inPerson });
          TriggerInPersonDropDown();
        }}
      />
    );
  } else {
    <div></div>;
  }
  const TriggerInPersonDropDown = () => {
    setInPersonDD(!InPersonDD);
  };
  return (
    <>
      <div className="card container border-0">
        <div className="card-wrapper">
          <div className="item1">
            <h3>Location</h3>
            <div className="location">
              <div className="card-item">
                <div
                  onClick={() => SetLocation("Virtual")}
                  className="card-selection"
                >
                  {virtualMarkup}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="27"
                viewBox="0 0 9 27"
              >
                <text
                  id="_"
                  data-name="/"
                  transform="translate(1 22)"
                  fill="#53bfd2"
                  fontSize="20"
                  fontFamily="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    /
                  </tspan>
                </text>
              </svg>
              <div
                onClick={() =>
                  SetLocation("In Person") && TriggerInPersonDropDown
                }
              >
                <h6>{inPersonMarkup}</h6>
                <div
                  className="inPerson-dd"
                  // onClick={TriggerInPersonDropDown}
                >
                  {DropdownHomeInPerson}
                </div>
              </div>
            </div>
          </div>
          <LineBetween />
          <div className="item2">
            <h3>Training Vertical</h3>
            <div className="card-item" onClick={TriggerVerticalDropDown}>
              <img src={Weight} alt="icon" />
              <p>{queryObject.vertical || queryObject.trainingType}</p>
            </div>
            {Dropdown}
          </div>
          <LineBetween />

          <div className="item3">
            <h3>Schedule</h3>
            <div className="card-item">
              <img src={SheduleIcon} alt="icon" />
              <DatePicker
                onChange={(datee) => {
                  setSelectedDate(datee);
                  var date = new Date(datee);
                  var year = date.getFullYear();
                  var month = date.getMonth() + 1;
                  var dt = date.getDate();

                  if (dt < 10) {
                    dt = "0" + dt;
                  }
                  if (month < 10) {
                    month = "0" + month;
                  }

                  setqueryObject({
                    ...queryObject,
                    date: year + "-" + month + "-" + dt,
                  });
                }}
                selected={selectedDate}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
              ></DatePicker>

              <DropDownSVG onClick={onClickHandle} />
            </div>
          </div>
          <LineBetween />

          <div className="item4">
            <h3>Availability</h3>
            <div
              className="card-item"
              onClick={TriggerDropDownTrainerAvailability}
            >
              <img src={AvailabilityIcon} alt="icon" />
              <p>{queryObject.availability}</p>
            </div>
            {DropdownAvailability}
          </div>

          <div className="item5">
            <div className="circle_search" onClick={search_action}>
              <BiSearch />
            </div>
          </div>
        </div>
      </div>
      <TrainerCards content={bestMatchData} bestMatchRef={bestMatchRef} />
      <TrainerCardOutside content={bestOthersData} otherRef={otherRef} />
    </>
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

const FindTrainer = connect(mapStateToProps, mapDispatchToProps)(FindTrainerFC);

export default FindTrainer;
