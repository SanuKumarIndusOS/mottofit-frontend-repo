import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "./find.scss";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import HoverImage from "react-hover-image";
import InPersonDropDown from "component/Home/Banner/InPersonDropDown";
import Between from "../../../assets/files/Home/Banner/SearchBar/between.svg";

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
import DropdownTrainerAvailability from "../../Home/Banner/DropdownAvailability";
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
          city: trainerQueryData?.city,
        },
      };

      setqueryObject(payload.query);
      getTrainerDataByQuery();
      // setqueryObject(trainerQueryData);
      // SetLocation(trainerQueryData.location);
    } else {
      let payload = {
        query: {
          location: "virtual",
          vertical: "Boxing",
          date: getFormatDate(),
          availability: "Early Bird",
        },
      };
      setqueryObject(payload.query);

      updateTrainerDetails(payload);
    }
  }, []);

  const [showMenu, setshowMenu] = useState(false);

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
    location: "virtual",
    vertical: "",
    date: "",
    availability: "",
    // inPerson: "In Person",
  });

  const [inPerson, setInPerson] = useState({
    newYork: { value: "New York City", selected: false },
    miami: { value: "Miami", selected: false },
    hamptons: { value: "Hamptons", selected: false },
    palmBeach: { value: "Palm Beach", selected: false },
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
        selectedData={queryObject.availability?.value}
      />
    );
  } else {
    <div></div>;
  }

  const TriggerDropDownTrainerAvailability = () => {
    setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
  };

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

  let Dropdown;

  if (DropdownState) {
    Dropdown = (
      <div className="box_3_active_trainer">
        <div className="dd_row_one">
          <div
            className={`option ${
              queryObject?.vertical?.value === "Boxing" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddBoxingState(!ddBoxingState);
              setDropdownState(!DropdownState);
              setqueryObject({
                ...queryObject,
                vertical: { label: "Boxing", value: "Boxing" },
              });
            }}
          >
            <div className="option_wapper">
              <HoverImage src={BoxingIcon} hoverSrc={BoxingIconActive} />
              <h2>Boxing</h2>
            </div>
          </div>
          <div
            className={`option ${
              queryObject?.vertical?.value === "Pilates" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddPilatesState(!ddPilatesState);
              setDropdownState(!DropdownState);
              setqueryObject({
                ...queryObject,
                vertical: { label: "Pilates", value: "Pilates" },
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
            className={`option ${
              queryObject?.vertical?.value === "Strength & HIIT"
                ? "selected-data"
                : ""
            }`}
            onClick={() => {
              setddHiitState(!ddHiitState);
              setqueryObject({
                ...queryObject,
                vertical: {
                  label: "Strength & HIIT",
                  value: "Strength & HIIT",
                },
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
            className={`option ${
              queryObject?.vertical?.value === "Yoga" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddYogaState(!ddYogaState);
              setqueryObject({
                ...queryObject,
                vertical: {
                  label: "Yoga",
                  value: "Yoga",
                },
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
    if (value === "virtual" || value === "Virtual") {
      setvirtualMarkup(
        <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
      );
      setinPersonMarkup(<p style={{ fontWeight: "normal" }}>In Person</p>);

      setqueryObject({ ...queryObject, location: "virtual" });
    } else {
      setvirtualMarkup(<p style={{ fontWeight: "normal" }}>Virtual</p>);
      setinPersonMarkup(
        <p
          style={{
            borderBottom: "3px solid #53BFD2",
            width: "222px",
            maxWidth: "fit-content",
          }}
        >
          In Person
        </p>
      );
      setqueryObject({ ...queryObject, location: "inPerson" });
      setInPersonDD(!InPersonDD);
    }
  };

  const search_action = () => {
    let city =
      Object.values(inPerson).filter(({ selected }) => selected)[0]?.value ||
      "";
    let payload = {
      query: {
        location: queryObject.location,
        date: queryObject.date,
        trainingType: queryObject.vertical,
        availability: queryObject.availability,
        city,
        // inPerson: queryObject.inPerson,
      },
    };

    updateTrainerDetails(payload);

    getTrainerDataByQuery(payload.query);
  };

  const getTrainerDataByQuery = (currData) => {
    const { location, date, trainingType, availability, city } =
      currData || trainerQueryData;

    const { trainerAvailableApi } = TrainerApi;

    let trainingValue = trainingType?.value ? [trainingType?.value] : [];

    let availabilityValue = availability?.value ? [availability?.value] : [];

    let tempCityValue = Object.values(inPerson).filter(
      ({ selected }) => selected
    )[0]?.value;

    let cityValue = tempCityValue ? tempCityValue : city;
    trainerAvailableApi.query.location = location;
    trainerAvailableApi.query.trainingType = encodeURIComponent(
      JSON.stringify(trainingValue)
    );
    // trainerAvailableApi.query.trainingType = JSON.stringify(trainingValue);

    trainerAvailableApi.query.date = date;
    trainerAvailableApi.query.city = location === "inPerson" ? cityValue : "";
    trainerAvailableApi.query.availability = JSON.stringify(availabilityValue);

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
        handleChange={handleChange}
        inPerson={inPerson}
        type="findtrainer"
      />
    );
  } else {
    <div></div>;
  }
  const TriggerInPersonDropDown = () => {
    setInPersonDD(!InPersonDD);
  };
  return (
    <div
      id="find-trainer"
      onClick={() => {
        console.log("findhit");

        //Availability Dropdown
        if (DropdownTrainerAvailabilityState) {
          setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
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
      <div className="card container border-0">
        <div className="card-wrapper">
          <div className="item1">
            <h3>Location</h3>
            <div className="location">
              <div className="card-item">
                <div
                  onClick={() => {
                    SetLocation("Virtual");
                    setInPersonDD(false);
                  }}
                  className="card-selection"
                >
                  {virtualMarkup}
                </div>
              </div>
              <img src={Between} alt="icon" />
              <div
                onClick={() => {
                  SetLocation("In Person") && TriggerInPersonDropDown();
                }}
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
              <p>
                {queryObject.vertical?.label ||
                  queryObject.trainingType?.label ||
                  "Select a Category"}
              </p>
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
              <p>{queryObject.availability?.label || "Select a Time"}</p>
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
      <div className="mobile-find-wrapper">
        <div className="cat">Strength & HIIT</div>
        <div className="date">16/03/2021</div>
        <div
          className="find-filters"
          onClick={() => {
            setshowMenu(!showMenu);
          }}
        ></div>
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
          <div className="clear-filters">Clear All Filters</div>
          <div className="location">
            <div>Location</div>
            <div className="element">
              Virtual <div className="slash">/</div> In Person
            </div>
            <div></div>
            <hr></hr>
          </div>
          <div className="vertical">
            Training Vertical
            <hr></hr>
          </div>
          <div className="schedule">
            Schedule
            <hr></hr>
          </div>
          <div className="availability">Availability</div>
        </div>
        <div className="search">APPLY ALL FILTERS </div>
      </div>
      <TrainerCards content={bestMatchData} bestMatchRef={bestMatchRef} />
      <TrainerCardOutside content={bestOthersData} otherRef={otherRef} />
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

const FindTrainer = connect(mapStateToProps, mapDispatchToProps)(FindTrainerFC);

export default FindTrainer;
