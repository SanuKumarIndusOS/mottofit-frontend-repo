import React, { useState, useEffect } from "react";
import "./find.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import BoxingIcon from "../../../assets/FindTrainer/DropDownAssets/Boxing Icon.svg";
import PilatesIcon from "../../../assets/FindTrainer/DropDownAssets/Pilates Icon.svg";
import StrengthIcon from "../../../assets/FindTrainer/DropDownAssets/Strength Icon.svg";
import YogaIcon from "../../../assets/FindTrainer/DropDownAssets/Yoga Icon.svg";

import TrainerCards from "../TrainersDetails/index";
import TrainerCardOutside from "../TrainerOutsideTime/index";

import Weight from "../../../assets/SVG/findTrainer/weight.svg";
import SheduleIcon from "../../../assets/Home/Banner/SearchBar/Shedule Icon.svg";
import AvailabilityIcon from "../../../assets/Home/Banner/SearchBar/Availability Icon.svg";
// import { Schedule } from "@material-ui/icons";
import DropdownTrainerAvailability from "./DropdownTrainerAvailability";

const FindTrainer = () => {
    useEffect(() => {
        var date = new Date(selectedDate.toISOString());
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = "0" + dt;
        }
        if (month < 10) {
            month = "0" + month;
        }

        setqueryObject({ ...queryObject, date: year + "-" + month + "-" + dt });
    }, []);

    const [bestMatchData, setbestMatchData] = useState([]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [DropdownState, setDropdownState] = useState(false);
    // const [DropdownValue, setDropdownValue] = useState([]);
    const [
        DropdownTrainerAvailabilityState,
        setDropdownTrainerAvailabilityState,
    ] = useState(false);
    const [
        DropdownAvailabilityValue,
        setDropdownTrainerAvailabilityValue,
    ] = useState([]);

    const [ddBoxingState, setddBoxingState] = useState(false);
    const [ddPilatesState, setddPilatesState] = useState(false);
    const [ddYogaState, setddYogaState] = useState(false);
    const [ddHiitState, setddHiitState] = useState(false);
    const [queryObject, setqueryObject] = useState({
        location: "Online",
        vertical: "Boxing",
        date: "",
        availability: "EarlyBird",
    });

    const onClickHandle = () => {
        setSelectedDate(selectedDate);
        console.log(selectedDate.getMonth);
    };

    // Dropdown for availability
    let DropdownAvailability;
    if (DropdownTrainerAvailabilityState) {
        DropdownAvailability = <DropdownTrainerAvailability />;
    } else {
        <div>hello</div>;
    }

    const TriggerDropDownTrainerAvailability = () => {
        setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
        setDropdownTrainerAvailabilityValue("Boxing");
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
                            setDropdownState(!DropdownState);
                            setqueryObject({
                                ...queryObject,
                                vertical: "Boxing",
                            });
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
                            setDropdownState(!DropdownState);
                            setqueryObject({
                                ...queryObject,
                                vertical: "Pilates",
                            });
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
                            setqueryObject({
                                ...queryObject,
                                vertical: "Strength & Hiit",
                            });
                            setDropdownState(!DropdownState);
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
                            setqueryObject({
                                ...queryObject,
                                vertical: "Yoga",
                            });
                            setDropdownState(!DropdownState);
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
        // setDropdownValue("Boxing");
        console.log(DropdownState);
    };
    console.log(selectedDate);

    const [virtualMarkup, setvirtualMarkup] = useState(
        <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
    );
    const [inPersonMarkup, setinPersonMarkup] = useState(
        <p style={{ fontWeight: "normal" }}>In Person</p>
    );

    const SetLocation = (value) => {
        console.log(value);

        if (value === "Virtual") {
            setvirtualMarkup(
                <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
            );
            setinPersonMarkup(
                <p style={{ fontWeight: "normal" }}>In Person</p>
            );

            setqueryObject({ ...queryObject, location: "Online" });
        } else {
            setvirtualMarkup(<p style={{ fontWeight: "normal" }}>Virtual</p>);
            setinPersonMarkup(
                <p style={{ borderBottom: "3px solid #53BFD2" }}>In Person</p>
            );
            setqueryObject({ ...queryObject, location: "Person" });
        }
    };

    const search_action = () => {
        var token = JSON.parse(localStorage.getItem("user-info"))["token"];
        var url = "http://doodlebluelive.com:2307/v1/availableTrainer?";
        var query = `location=${queryObject.location}&trainingType=["${queryObject.vertical}"]&date=["${queryObject.date}","${queryObject.date}"]&availability=["${queryObject.availability}"]`;

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        fetch(url + query, {
            method: "GET",
            headers: myHeaders,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data, data.data.bestMatch);
                setbestMatchData(data.data.bestMatch);
            });

        console.log(url + query);
        console.log(JSON.parse(localStorage.getItem("user-info"))["token"]);
    };

    return (
        <>
            <div className="card container" style={{ border: "none" }}>
                <div className="card-wrapper">
                    <div className="item1">
                        <h3>Location</h3>
                        <div className="card-item">
                            <div onClick={() => SetLocation("Virtual")}>
                                {virtualMarkup}
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
                            <div onClick={() => SetLocation("InPerson")}>
                                {/* <p style={{ fontWeight: "normal" }}>In Person</p> */}{" "}
                                {inPersonMarkup}
                            </div>
                        </div>
                    </div>
                    <LineBetween />
                    <div className="item2">
                        <h3>Training Vertical</h3>
                        <div
                            className="card-item"
                            onClick={TriggerVerticalDropDown}
                        >
                            <img src={Weight} alt="icon" />
                            <p>{queryObject.vertical}</p>
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

                                    console.log(year + "-" + month + "-" + dt);

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
                            <p>Early Bird</p>
                        </div>
                        {DropdownAvailability}
                    </div>
                    {/* <LineBetween /> */}

                    <div className="item5">
                        <div className="circle_search" onClick={search_action}>
                            <BiSearch />
                        </div>
                    </div>
                </div>
            </div>
            <TrainerCards content={bestMatchData}></TrainerCards>
            <TrainerCardOutside></TrainerCardOutside>
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
