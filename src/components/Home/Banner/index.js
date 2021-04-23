import React, { useState } from "react";
import "./style.scss";
import "./find.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import Between from "../../../assets/Home/Banner/SearchBar/between.svg";
import AvailabilityIcon from "../../../assets/Home/Banner/SearchBar/Availability Icon.svg";
import SheduleIcon from "../../../assets/Home/Banner/SearchBar/Shedule Icon.svg";
import TrainerVerticalIcon from "../../../assets/Home/Banner/SearchBar/Training Vertical Icon.svg";
import Dropdown from "./Dropdown";
import DropdownAvailability from "./DropdownAvailability";

const Banner = () => {
    const [DropdownState, setDropdownState] = useState(false);
    const [DropdownValue, setDropdownValue] = useState([]);

    const [DropdownAvailabilityState, setDropdownAvailabilityState] = useState(
        false
    );
    const [DropdownAvailabilityValue, setDropdownAvailabilityValue] = useState(
        []
    );
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onClickHandle = () => {
        setSelectedDate(selectedDate);
        console.log(selectedDate);
    };
    let DropdownTraining;
    if (DropdownState) {
        DropdownTraining = <Dropdown />;
    } else {
        <div>hello</div>;
    }

    let DropdownHomeAvailability;
    if (DropdownAvailabilityState) {
        DropdownHomeAvailability = <DropdownAvailability />;
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
                                    <button className="location_item">
                                        Virtual
                                    </button>
                                    <img src={Between} ali="icon" />
                                    <button className="location_item">
                                        In Personal
                                    </button>
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
                                    <h2>Select a Category</h2>
                                    <img src={SheduleIcon} ali="icon" />
                                </div>
                                <div className="home_dropdown">
                                    {DropdownTraining}
                                </div>
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item3">
                            <h3>Schedule</h3>
                            <div className="card_item_home_item3 mt-2">
                                <DatePicker
                                    onChange={(date) => setSelectedDate(date)}
                                    selected={selectedDate}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                ></DatePicker>
                                <img src={TrainerVerticalIcon} ali="icon" />
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
                                    <h2>Select a Time</h2>
                                    <img src={AvailabilityIcon} ali="icon" />
                                </div>
                                <div className="home_dropdown">
                                    {DropdownHomeAvailability}
                                </div>
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item5">
                            <button className="circle">
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

export default Banner;
