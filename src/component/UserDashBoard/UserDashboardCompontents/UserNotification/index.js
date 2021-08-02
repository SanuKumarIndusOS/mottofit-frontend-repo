import React from "react";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import Jenny from "assets/files/TrainerDashboard/Message/Jenny.png";
import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import CloseIcon from "assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";
const UserNotification = () => {

  fetch('http://doodlebluelive.com:2355/v1/get-notification')
  .then(response => response.json())
  .then(data => console.log(data));



  return (
    <>
      <div className="user_notify_outter_container">
        <div className="container">
          <div className="user_notify_inner_container">
            <div className="notify_header">
              <h2>Notifications</h2>
            </div>
            <div className="notify_wrapper">
              <Tabs
                defaultTab="all"
                onChange={(tabId) => {
                 // console.log(tabId);
                }}
              >
                <TabList>
                  <Tab tabFor="all">All</Tab>
                  <Tab tabFor="unread">unread</Tab>
                </TabList>
                <div className="tabPanel_outter">
                  <TabPanel tabId="all">
                    <MessageTemp />
                  </TabPanel>
                  <TabPanel tabId="unread">
                    <MessageTemp />
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

const MessageTemp = () => {
  const [visiable, setVisiable] = React.useState(3);
  const handleMoreMessage = () => {
    setVisiable((prevValue) => prevValue + 1);
  };
  return (
    <>
      <div className="notify_bx">
        <div className="notify_box_container">
          {MessageData.slice(0, visiable).map((messageData, index) => {
            return (
              <div className="notify_box" key={index}>
                <div className="closeIcon">
                  <img src={CloseIcon} alt="icon" />
                </div>
                <div className="notify_inner_box">
                  <div className="notify_profile">
                    <img src={messageData.img} alt="icon" />
                  </div>
                  <div className="notify_message">
                    <h6>
                      {messageData.message}
                      <span>{messageData.click}</span> to view your session
                      details.
                    </h6>
                    <div className="notify_time">
                      <img src={AvailabilityIcon} alt="icon" />
                      <p>{messageData.dates}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={handleMoreMessage}>
          View More <BlueHoverButton />{" "}
        </button>
      </div>
    </>
  );
};

const MessageData = [
  {
    img: Jenny,
    message:
      " Your pilates session with Jane Doe has been confirmed for 20th February, 2021. ",
    click: "Click here",
    dates: "February 16th, 2021 at 2:20 P.M.",
  },
  {
    img: Jenny,
    message:
      " Your yoga session with Jane Doe has been confirmed for 20th May, 2021. ",
    click: "Click here",
    dates: "May 05th, 2021 at 2:20 P.M.",
  },
  {
    img: Jenny,
    message:
      " Your yoga session with Jane Doe has been confirmed for 20th May, 2021. ",
    click: "Click here",
    dates: "May 05th, 2021 at 2:20 P.M.",
  },
  {
    img: Jenny,
    message:
      " Your yoga session with Jane Doe has been confirmed for 20th May, 2021. ",
    click: "Click here",
    dates: "May 05th, 2021 at 2:20 P.M.",
  },
  {
    img: Jenny,
    message:
      " Your yoga session with Jane Doe has been confirmed for 20th May, 2021. ",
    click: "Click here",
    dates: "May 05th, 2021 at 2:20 P.M.",
  },
];

export default UserNotification;
