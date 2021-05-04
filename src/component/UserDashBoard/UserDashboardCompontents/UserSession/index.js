import React, { useState } from "react";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import AvailabilityIcon from "../../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import { Link } from "react-router-dom";
import BlueArrowButton from "../../../common/BlueArrowButton";
import Jenny from "../../../../assets/files/TrainerDashboard/Message/Jenny.png";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";

const UserSession = () => {
    return (
        <>
            <div className="outter_user_container">
                <div className="container">
                    <div className="inner_user_container ">
                        <div className="userSession_heading">
                            <h2>My Session</h2>
                        </div>
                        <div className="US_tabs_wrapper">
                            <Tabs
                                defaultTab="overview"
                                onChange={(tabId) => {
                                    console.log(tabId);
                                }}
                            >
                                <TabList>
                                    <Tab tabFor="overview">Overview</Tab>
                                    <Tab tabFor="upcoming">Upcoming</Tab>
                                    <Tab tabFor="pass">Motto pass</Tab>
                                    <Tab tabFor="previous">Previous</Tab>
                                </TabList>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="overview">
                                        <TabOne />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="upcoming">
                                        <TabOne />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="pass">
                                        <TabOne />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="previous">
                                        <TabOne />
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const TabOne = () => {
    const [visible, setVisible] = useState([3]);

    const setViewMore = () => {
        setVisible((prevValue) => prevValue + 1);
    };
    return (
        <div className="tabPanel_overview">
            <div className="tabPanel_overview_left">
                <div className="TP_overview_wrapper">
                    <h3>Upcoming Sessions</h3>
                    <div className="TP_US_overview">
                        <div className="TP_US_overview_inner">
                            {Data.slice(0, visible).map((data, index) => {
                                return (
                                    <>
                                        <div
                                            className="TP_upcomeSession_overview"
                                            key={index}
                                        >
                                            <div className="TP_USession_dates">
                                                <h4>
                                                    {data.date}
                                                    <span>{data.month}</span>
                                                </h4>
                                            </div>
                                            <div className="TP_USession_data">
                                                <h2>{data.heading}</h2>
                                                <div className="TP_USession_data_icons">
                                                    <h5>
                                                        <img
                                                            src={data.imgAva}
                                                            alt="icon"
                                                        />
                                                        {data.avaTime}
                                                    </h5>
                                                    <h5>
                                                        <img
                                                            src={data.imgLoc}
                                                            alt="icon"
                                                        />
                                                        {data.loc}
                                                    </h5>
                                                </div>
                                                <div className="TP_USession_data_buttons">
                                                    <button>Reschedule</button>
                                                    <button>Cancel</button>
                                                    <div className="button_boarder">
                                                        <button>
                                                            Add Friends{" "}
                                                        </button>
                                                        <img
                                                            src={ArrowNext}
                                                            alt="icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                );
                            })}
                        </div>
                        <button
                            onClick={setViewMore}
                            className="viewMoreButton"
                        >
                            View all Session <BlueHoverButton />
                        </button>
                    </div>
                </div>
            </div>
            <div className="tabPanel_overview_right">
                <div className="TB_overview_right">
                    <div className="TB_overview_row_one">
                        <div className="row_one_data">
                            <h2>Want to Do More for Less?</h2>
                            <p>
                                Save money by purchasing multiple sessions at
                                once, eligible for use within 60 days of the
                                purchase date.
                            </p>
                            <Link to="/">
                                Get A pass <BlueArrowButton />{" "}
                            </Link>
                        </div>
                    </div>
                    <div className="TB_overview_row_two">
                        <div className="row_two_data">
                            <h2>PREVIOUS SESSIONS</h2>
                            <div className="row_two_scroll">
                                {Data.map((data, index) => {
                                    return (
                                        <>
                                            <div
                                                className="row_previous_data"
                                                key={index}
                                            >
                                                <div className="row_previous_avater">
                                                    <img
                                                        src={data.previousImg}
                                                        alt="profile"
                                                    />
                                                </div>
                                                <div className="row_previous_header">
                                                    <h2>{data.prevHeading}</h2>
                                                    <p>{data.prevDate}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Data = [
    {
        date: "14",
        month: "Feb",
        heading: "Strength & HIIT with John Doe",
        imgAva: AvailabilityIcon,
        avaTime: "  5:00 PM PST",
        imgLoc: LocationIcon,
        loc: "Trainer GYM",
        previousImg: Jenny,
        prevHeading: "Yoga with Kane",
        prevDate: "02 May 2021",
    },
    {
        date: "25",
        month: "May",
        heading: "Yoga with Kane",
        imgAva: AvailabilityIcon,
        avaTime: "  5:00 PM PST",
        imgLoc: LocationIcon,
        loc: "Trainer GYM",
        previousImg: Jenny,
        prevHeading: "Yoga with John Doe",
        prevDate: "02 May 2021",
    },
    {
        date: "20",
        month: "Apr",
        heading: "Boxing with John Doe",
        imgAva: AvailabilityIcon,
        avaTime: "  5:00 PM PST",
        imgLoc: LocationIcon,
        loc: "Trainer GYM",
        previousImg: Jenny,
        prevHeading: "Yoga with Kane ",
        prevDate: "02 May 2021",
    },
    {
        date: "20",
        month: "Apr",
        heading: "Boxing with John Doe",
        imgAva: AvailabilityIcon,
        avaTime: "  5:00 PM PST",
        imgLoc: LocationIcon,
        loc: "Trainer GYM",
        previousImg: Jenny,
        prevHeading: "Yoga with Ananaya ",
        prevDate: "02 May 2021",
    },
    {
        date: "20",
        month: "Apr",
        heading: "Boxing with John Doe",
        imgAva: AvailabilityIcon,
        avaTime: "  5:00 PM PST",
        imgLoc: LocationIcon,
        loc: "Trainer GYM",
        previousImg: Jenny,
        prevHeading: "Yoga with Kane ",
        prevDate: "02 May 2021",
    },
];

export default UserSession;
