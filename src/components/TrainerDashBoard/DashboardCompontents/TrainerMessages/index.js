import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jenny from "../../../../assets/TrainerDashboard/Message/Jenny.png";
import Jonn from "../../../../assets/TrainerDashboard/Message/Image 1.png";
import SheduleIcon from "../../../../assets/TrainerDashboard/Message/Shedule Icon.svg";
import AvailabilityIcon from "../../../../assets/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/TrainerDashboard/Message/Location Icon.svg";

const TrainerMessage = () => {
    return (
        <>
            <div className="container main_message_container">
                <div className="message_outter_container">
                    <h2>Messages</h2>
                    <div className="message_inner">
                        <div className="message_wrapper">
                            <Tabs
                                defaultTab="one"
                                onChange={(tabId) => {
                                    console.log(tabId);
                                }}
                            >
                                <TabList>
                                    <Tab tabFor="one">All</Tab>
                                    <Tab tabFor="two">INDIVIDUAL CLIENTS</Tab>
                                    <Tab tabFor="three">SOCIAL GROUPS</Tab>
                                    <Tab tabFor="four">ADMIN</Tab>
                                </TabList>
                                <div className="message_inner">
                                    <TabPanel tabId="one">
                                        <div className="message_inner_one">
                                            <div className="message_left">
                                                <Link to="/trainer-dashboard/message">
                                                    <div className="inner_link">
                                                        <img
                                                            src={Jenny}
                                                            alt="icon"
                                                        />
                                                        <div className="message_link_notify">
                                                            <h3>
                                                                Jenny Anderson
                                                            </h3>
                                                            <h6>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetuer ad
                                                                piscing elit,
                                                                sed..
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="inner_link">
                                                        <img
                                                            src={Jonn}
                                                            alt="icon"
                                                        />
                                                        <div className="message_link_notify">
                                                            <h3>
                                                                Jeremy Clark
                                                            </h3>
                                                            <h6>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetuer ad
                                                                piscing elit,
                                                                sed..
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="message_right">
                                                <div className="message_right_chatarea">
                                                    <div className="message_right_header">
                                                        <h2>
                                                            Strength & HIIT with
                                                            Jeremy Clark
                                                        </h2>
                                                        <div className="message_header_times">
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        SheduleIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {" "}
                                                                    {new Date().toDateString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        AvailabilityIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {new Date().toLocaleTimeString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        LocationIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    Channai, TN
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message_right_textarea">
                                                        <Chat/>
                                                        <Chat/>


                                                    </div>
                                                    <div className="message_right_input">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message here.."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel tabId="two">
                                        <p>Tab 2 content</p>
                                    </TabPanel>
                                    <TabPanel tabId="three">
                                        <p>Tab 3 content</p>
                                    </TabPanel>
                                    <TabPanel tabId="four">
                                        <p>Tab 4 content</p>
                                    </TabPanel>
                                </div>
                            </Tabs>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const Chat = () => {
    return (
        <>
            <div className="message_chat">
                <div className="message_text">
                    <h5>
                        Lorem ipsum dolor sit amet, consectetuer ad ipiscing
                        elit, sed diam nonummy nibh euism od tincidunt ut…
                    </h5>
                </div>
                <img src={Jonn} alt="icon" />
            </div>
        </>
    );
};

export default TrainerMessage;
