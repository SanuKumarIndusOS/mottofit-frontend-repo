import React, { useState } from "react";
import "./find.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import BoxingIcon from "../../../assets/FindTrainer/DropDownAssets/Boxing Icon.svg";
import PilatesIcon from "../../../assets/FindTrainer/DropDownAssets/Pilates Icon.svg";
import StrengthIcon from "../../../assets/FindTrainer/DropDownAssets/Strength Icon.svg";
import YogaIcon from "../../../assets/FindTrainer/DropDownAssets/Yoga Icon.svg";

// import Slash from "../../../assets/SVG/findTrainer/slash.svg";
import Weight from "../../../assets/SVG/findTrainer/weight.svg";
import SheduleIcon from "../../../assets/Home/Banner/SearchBar/Shedule Icon.svg";
import AvailabilityIcon from "../../../assets/Home/Banner/SearchBar/Availability Icon.svg";
// import { Schedule } from "@material-ui/icons";

const FindTrainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  var Training_vertical = [];

  const [DropdownState, setDropdownState] = useState(false);
  const [DropdownValue, setDropdownValue] = useState([]);

  const [ddBoxingState, setddBoxingState] = useState(false);
  const [ddPilatesState, setddPilatesState] = useState(false);
  const [ddYogaState, setddYogaState] = useState(false);
  const [ddHiitState, setddHiitState] = useState(false);

  const onClickHandle = () => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);

    
  };

  let Dropdown;

  if (DropdownState) {
    Dropdown = (
      <div className="box_3_active">
        <div className="dd_row_one">
          <div
            className="option"
            onClick={() => {
              setddBoxingState(!ddBoxingState);
              console.log(ddBoxingState, "boxing");
            }}
          >
            <div className="option_wapper">
              <img src={BoxingIcon} alt="icon" />
              <h2>Boxing</h2>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setddPilatesState(!ddPilatesState);
              console.log(ddPilatesState, "pilates");
            }}
          >
            <div className="option_wapper">
              <img src={PilatesIcon} alt="icon" />
              <h2>Pilates</h2>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className="option"
            onClick={() => {
              setddHiitState(!ddHiitState);
              console.log(ddHiitState, "hiit");
            }}
          >
            <div className="option_wapper">
              <img src={StrengthIcon} alt="icon" />
              <h2>Strength & Hiit</h2>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setddYogaState(!ddYogaState);
              console.log(ddYogaState, "yoga");
            }}
          >
            <div className="option_wapper">
              <img src={YogaIcon} alt="icon" />
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
    setDropdownValue("Boxing");
    console.log(DropdownState);
  };
  console.log(selectedDate);

  const search_action = () => {
    console.log("search action");
    var search_query;

    fetch(`http://doodlebluelive.com:2307/v1/availableTrainer?location=Online&trainingType=["Yoga","Boxing"]&date=["2021-03-24","2021-03-25"]&availability=["EarlyBird"]`, {
      method: "GET",
      headers:{token :"09953e83ca7178b0f1678705e820305bab79fa68a4af94ce02598534a522514d14bfd85bcdb1fd8c856f596f04284f3402a14a2c9ee46e300e6b5eff579df849190fa60e7720adedc110ec88925a9681c9f7a077cad76636822e6c467d9a2c84517b423bbd69287c6b372b24e36c09b28d1131735a3e6501e1cb0c4163f6792aba152ca801e83a63cdb9cfdf52ae17f3ffca7988ccdb"},
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="card container" style={{ border: "none" }}>
        <div className="card-wrapper">
          <div className="item1">
            <h3>Location</h3>
            <div className="card-item">
              <p>Virtual</p>
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
              <p>In Person</p>
            </div>
          </div>
          <LineBetween />
          <div className="item2">
            <h3>Training Vertical</h3>
            <div className="card-item" onClick={TriggerVerticalDropDown}>
              <img src={Weight} alt="icon" />
              <p>Boxing</p>
            </div>
            {Dropdown}
          </div>
          <LineBetween />

          <div className="item3">
            <h3>Schedule</h3>
            <div className="card-item">
              <img src={SheduleIcon} alt="icon" />
              <DatePicker
                onChange={(date) => setSelectedDate(date)}
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
            <div className="card-item">
              <img src={AvailabilityIcon} alt="icon" />
              {/* <select>
                <option value="">Boxing</option>
                <option value="">Pilates</option>
                <option value="">Strength & hiit</option>
                <option value="">Yoga</option>
              </select> */}
              <p>Early Bird</p>
            </div>
          </div>
          {/* <LineBetween /> */}

          <div className="item5">
            <div className="circle_search" onClick={search_action}>
              <BiSearch />
            </div>
          </div>
        </div>
      </div>
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

export default FindTrainer;
