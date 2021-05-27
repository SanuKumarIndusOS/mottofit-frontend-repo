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
import { history } from "helpers";
import { useEffect } from 'react';



const UserSession = () => {
    const [userSessionsData, setUserData] = React.useState([]);

    useEffect(() => {
        fetch('http://doodlebluelive.com:2337/v1/session/user', {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            method: 'GET',

        })
            .then((resp) => resp.json())
            .then((res) => {
                setUserData(res.data["pastSessions"]);
                console.log(res.data["pastSessions"]);
            })
            .catch((error) => { console.log(error) })
    }, []);


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
                                        <TabOne tabname={'overview'} tabData={userSessionsData} />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="upcoming">
                                        <TabOne tabname={"Upcoming"} tabData={userSessionsData} />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="pass">
                                        <TabOne tabname={"Moto Pass"} tabData={userSessionsData} />
                                    </TabPanel>
                                </div>
                                <div className="tabPanel_outter">
                                    <TabPanel tabId="previous">
                                        <TabOne tabname={"Previous"} tabData={userSessionsData} />
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

const TabOne = ({ tabname, tabData }) => {

    const [visible, setVisible] = useState([3]);

    const setViewMore = () => {
        setVisible((prevValue) => prevValue + 1);
    };
    return (
        <div className="tabPanel_overview">
            <div className="tabPanel_overview_left">
                <div className="TP_overview_wrapper">
                    <h3>{tabname} Sessions</h3>
                    <div className="TP_US_overview">
                        <div className="TP_US_overview_inner">
                            {tabData.slice(0, visible).map((data, index) => {
                                console.log(tabData);
                                return (
                                    <>
                                        <div
                                            className="TP_upcomeSession_overview"
                                            key={index}
                                        >
                                            <div className="TP_USession_dates">
                                                <h4>
                                                    {data.createdAt.substr(8, 2)}
                                                    <span>{datamonth[data.createdAt.substr(5,2)]}</span>
                                                </h4>
                                            </div>
                                            <div className="TP_USession_data">
                                                <h2>{`${data.activity} with ${data.trainerDetail["firstName"]}`}</h2>
                                                <div className="TP_USession_data_icons">
                                                    <h5>
                                                        <img
                                                            src={AvailabilityIcon}
                                                            alt="icon"
                                                        />
                                                        {Data[0].avaTime}
                                                    </h5>
                                                    <h5>
                                                        <img
                                                            src={LocationIcon}
                                                            alt="icon"
                                                        />
                                                        {Data[0].loc}
                                                    </h5>
                                                </div>
                                                <div className="TP_USession_data_buttons">
                                                    <button>Reschedule</button>
                                                    <button>Cancel</button>
                                                    <div className="button_boarder">
                                                        <button onClick={() => history.push({ pathname: '/user/with-friends' })}>
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

const datamonth = {
    '01':'Jan',
    '02':'Feb',
    '03':'Mar',
    '04':'Apr',
    '05':'May',
    '06':'Jun',
    '07':'Jul',
    '08':'Aug',
    '09':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec',
}

export default UserSession;
