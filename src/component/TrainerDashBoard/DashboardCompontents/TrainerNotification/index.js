import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import CloseIcon from "assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";
import { io } from "socket.io-client";

import { getnotificationList } from "action/NotificationAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

const TrainerNotification = ({ getnotificationList }) => {
  const [allNotificationData, setAllNotificationData] = useState([]);

  const [unReadedNotificationData, setUnreadedNotificationData] = useState([]);

  const socket = io("http://doodlebluelive.com:2355");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connetesd");
    });

    socket.on(localStorage.getItem("user-id") + "-notification", (data) => {
      console.log("Received a notification from the server for bryan", data);

      getnotificationList().then((data) => {
        console.log(data);
        setAllNotificationData(data);
      });
    });

    getnotificationList().then((data) => {
      console.log(data);
      setAllNotificationData(data);
    });
  }, []);

  // const handleNotificationClose = (index) => {
  //   const tempData = [...allNotificationData].filter((_, i) => i !== index);

  //   setAllNotificationData(tempData);
  // };

  return (
    <>
      <div className="user_notify_outter_container">
        <div className="container">
          <div className="user_notify_inner_container">
            <div className="notify_header">
              <h2>Notifications</h2>
            </div>
            <div className="notify_wrapper">
              {allNotificationData.map((item) => {
                return (
                  <div className="notification_card">
                    <img className="noti_img" src={item.picture}></img>

                    <div className="noti_content">
                      <div className="noti_msg">{item.message}</div>

                      <div className="noti_time">
                        <img src={AvailabilityIcon} alt="icon" className="avail_img" />
                        { moment(
                          item.updatedAt.slice(0, 10),
                          "yyyy-mm-dd"
                        ).format("MMMM") +
                          " " +
                          item.updatedAt.slice(8, 10) +
                          "th, " +
                          item.updatedAt.slice(0, 4) +
                          " at " +
                          moment(item.updatedAt.slice(11, 16), "HH:mm").format(
                            "h:mm A"
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <Tabs
                defaultTab="all"
                onChange={(tabId) => {
                  console.log(tabId);
                }}
              >
                <TabList>
                  <Tab tabFor="all">All</Tab>
                  <Tab tabFor="unread">unread</Tab>
                </TabList>
                <div className="tabPanel_outter">
                  <TabPanel tabId="all">
                    <MessageTemp
                      data={allNotificationData}
                      onClose={handleNotificationClose}
                    />
                  </TabPanel>
                  <TabPanel tabId="unread">
                    <MessageTemp data={unReadedNotificationData} />
                  </TabPanel>
                </div>
              </Tabs> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MessageTemp = ({ data, onClose }) => {
  const [visiable, setVisiable] = React.useState(3);
  const handleMoreMessage = () => {
    setVisiable((prevValue) => prevValue + 1);
  };
  return (
    <>
      <div className="notify_bx">
        <div className="notify_box_container">
          {data?.length > 0 ? (
            data.slice(0, visiable).map((messageData, index) => {
              return (
                <div className="notify_box" key={index}>
                  <div className="closeIcon">
                    <img
                      src={CloseIcon}
                      alt="icon"
                      onClick={() => onClose(index)}
                      className="cursor-pointer"
                    />
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
            })
          ) : (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <h2>No Notifications</h2>
            </div>
          )}
        </div>
        {data.length > 5 && (
          <button onClick={handleMoreMessage}>
            View More <BlueHoverButton />{" "}
          </button>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getnotificationList,
    },
    dispatch
  );
};

const TrainerNotificationC = connect(
  null,
  mapDispatchToProps
)(TrainerNotification);

export default TrainerNotificationC;
