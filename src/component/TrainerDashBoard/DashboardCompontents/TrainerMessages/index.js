import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./style.scss";
import Jenny from "../../../../assets/files/TrainerDashboard/Message/Jenny.png";
import Jonn from "../../../../assets/files/TrainerDashboard/Message/Image 1.png";
import SheduleIcon from "../../../../assets/files/TrainerDashboard/Message/Shedule Icon.svg";
import AvailabilityIcon from "../../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import BlueHoverButton from "../../../common/BlueArrowButton/index";
import { trainerChannel } from "action/trainerAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { twilioApi } from "../../../../service/apiVariables";
import { api } from "../../../../service/api";
import { Toast } from "../../../../service/toast";
import ChatBox from "component/common/Message/ChatBox";
import {
  initClientDispatch,
  updateMessagingDetails,
  unSubscribeFromChannel,
  unSubscribeFromClient,
} from "action/messagingAct";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { InfiniteScrollComponent } from "component/common/Scrollbars";

const TrainerMessageClass = ({
  trainerChannel,
  initClientDispatch,
  clientData,
  activeChannel,
  activeChannelMessages,
  typingMembers,
  chatClientInstance,
  updateMessagingDetails,
  pastSessions,
  upcomingSessions,
  adminMessages,
  invitedSessions,
  unSubscribeAct,
  unSubscribeClientAct,
}) => {
  const isUser = parseInt(localStorage.getItem("type")) === 3;

  const [individual_list, setIndividual] = useState([]);
  const [socialGroup_list, setSocialGroup_list] = useState([]);
  const [admin_list, setAdmin_list] = useState([]);
  const [Channel, setChannel] = useState([]);
  const [Client, setClient] = useState();
  const [messages, setMessages] = useState([]);
  const [text_thread, setText_thread] = useState([]);
  const [chattoken, setToken] = useState("");
  const [channel_id, setChannel_id] = useState("");
  const [isMessageListLoading, setMessageListLoading] = useState(true);
  const [pageData, setPageData] = useState({
    invited: 0,
    upcoming: 0,
    past: 0,
    admin: 0,
  });

  const [currentTab, setCurrentTab] = useState(isUser ? "invited" : "upcoming");

  // Make Id dynamic
  useEffect(() => {
    // Get Contact_list

    initClientDispatch();

    // handleTabChange(isUser ? "invited" : "upcoming");

    return () => {
      unSubscribeClientAct();
    };
  }, []);

  useEffect(() => {
    getChannelDetails(currentTab);
  }, [pageData]);

  const getChannelDetails = (tab) => {
    trainerChannel(tab, pageData[tab])
      .then((data) => {
        let sessionTypeData = {
          invited: "invitedSessions",
          upcoming: "upcomingSessions",
          past: "pastSessions",
          admin: "adminSessions",
        };

        let currentSession = sessionTypeData[tab];

        setMessageListLoading(false);

        let reduxData = {
          [currentSession]: [...data],
        };

        updateMessagingDetails(reduxData);
      })
      .catch((err) => {
        setMessageListLoading(false);
        // Toast({ type: "error", message: err.message || "error" });
      });
  };

  function PopulateContacts(channelID, members, channelData) {
    chatClientInstance.joinChannelByID(channelID).then(() => {
      let reduxData = {
        currentChannelMembers: members,
        channelData,
      };
      console.log(reduxData);

      updateMessagingDetails(reduxData);
    });
  }

  const handleScrollChange = () => {};

  function handleTabChange(tab) {
    // console.log(tab);

    setCurrentTab(tab);

    setMessageListLoading(true);

    unSubscribeAct();

    getChannelDetails(tab);
  }

  return (
    <>
      <div className="main_message_container">
        <div className="message_outter_container">
          <h2>Messages</h2>
          <div className="message_inner">
            <div className="message_wrapper">
              <Tabs
                defaultTab={isUser ? "invited" : "upcoming"}
                onChange={(tab) => {
                  handleTabChange(tab);
                }}
              >
                <TabList>
                  {isUser && <Tab tabFor="invited">Invited</Tab>}
                  <Tab tabFor="upcoming">Upcoming</Tab>
                  <Tab tabFor="past">Previous</Tab>
                  <Tab tabFor="admin">Admin</Tab>
                </TabList>
                <div className="message_inner">
                  <TabPanel tabId="invited">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {!isMessageListLoading ? (
                          invitedSessions.map((item, index) => {
                            const { from, body, date_updated } = item.message;

                            let lastUserProfilePic =
                              item["members"]?.filter(
                                ({ userId }) => userId === from
                              )[0] ||
                              item["members"][0] ||
                              {};

                            return (
                              <div
                                className="contact_item"
                                key={`${Date.now()}_all_${index}`}
                              >
                                <div className="inner_link">
                                  <UserAvatar
                                    {...lastUserProfilePic}
                                    className="img-md-2"
                                  />

                                  <div
                                    className="message_link_notify"
                                    onClick={() =>
                                      PopulateContacts(
                                        item["channelUniqueName"],
                                        item["members"],
                                        item
                                      )
                                    }
                                  >
                                    <div style={{ display: "flex" }}>
                                      <h3>{item["chatTitle"] || ""} </h3>
                                      <h3>
                                        &ensp;
                                        {item["members"].length > 2
                                          ? "+  " + (item["members"].length - 2)
                                          : null}
                                      </h3>
                                    </div>
                                    <div>
                                      {body && (
                                        <p>{`${body?.slice(0, 100)}${
                                          body?.length > 100 ? "..." : ""
                                        }`}</p>
                                      )}
                                      {date_updated && (
                                        <span className="msg-timestamp-left">
                                          {getFormatDate(date_updated, "LT")}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* <div
                                    className="message_link_notify_mobile"
                                    onClick={() => {
                                      PopulateContacts(
                                        item["channelUniqueName"],
                                        item["members"],
                                        item
                                      );
                                      alert("mob");
                                      history.push("mobiles/chat")
                                    }}
                                  >
                                    <h3>{item["chatTitle"] || ""}</h3>
                                    <div>
                                      {body && (
                                        <p>{`${body?.slice(0, 100)}${
                                          body?.length > 100 ? "..." : ""
                                        }`}</p>
                                      )}
                                      {date_updated && (
                                        <span className="msg-timestamp-left">
                                          {getFormatDate(date_updated, "LT")}
                                        </span>
                                      )}
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <CommonPageLoader />
                        )}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={invitedSessions?.length > 0} />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel tabId="upcoming">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {!isMessageListLoading ? (
                          upcomingSessions.map((item, index) => {
                            const { from, body, date_updated } = item.message;

                            let lastUserProfilePic =
                              item["members"]?.filter(
                                ({ userId }) => userId === from
                              )[0] ||
                              item["members"][0] ||
                              {};
                            return (
                              <div
                                className="contact_item"
                                key={`${Date.now()}_${index}`}
                              >
                                <div className="inner_link">
                                  {/* <img
                                  src={
                                    lastUserProfilePic?.profilePicture || Jenny
                                  }
                                  alt={`${lastUserProfilePic?.userName} profile`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = Jenny;
                                  }}
                                /> */}
                                  <UserAvatar
                                    {...lastUserProfilePic}
                                    className="img-md-2"
                                  />
                                  <div
                                    className="message_link_notify"
                                    onClick={() =>
                                      PopulateContacts(
                                        item["channelUniqueName"],
                                        item["members"],
                                        item
                                      )
                                    }
                                  >
                                    <div style={{ display: "flex" }}>
                                      <h3>{item["chatTitle"] || ""}</h3>
                                      <h3>
                                        &ensp;
                                        {item["members"].length > 2
                                          ? "+  " + (item["members"].length - 2)
                                          : null}
                                      </h3>
                                    </div>
                                    <div>
                                      {body && (
                                        <p>{`${body?.slice(0, 100)}${
                                          body?.length > 100 ? "..." : ""
                                        }`}</p>
                                      )}
                                      {date_updated && (
                                        <span className="msg-timestamp-left">
                                          {getFormatDate(date_updated, "LT")}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <CommonPageLoader />
                        )}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={upcomingSessions.length > 0} />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="past">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {!isMessageListLoading ? (
                          pastSessions.map((item, index) => {
                            const { from, body, date_updated } = item.message;

                            let lastUserProfilePic =
                              item["members"]?.filter(
                                ({ userId }) => userId === from
                              )[0] ||
                              item["members"][0] ||
                              {};
                            return (
                              <div
                                className="contact_item"
                                key={`${index}_${Date.now()}`}
                              >
                                <div className="inner_link">
                                  {/* <img
                                  src={
                                    lastUserProfilePic?.profilePicture || Jenny
                                  }
                                  alt={`${lastUserProfilePic?.userName} profile`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = Jenny;
                                  }}
                                /> */}
                                  <UserAvatar
                                    {...lastUserProfilePic}
                                    className="img-md-2"
                                  />
                                  <div
                                    className="message_link_notify"
                                    onClick={() =>
                                      PopulateContacts(
                                        item["channelUniqueName"],
                                        item["members"],
                                        item
                                      )
                                    }
                                  >
                                    <div style={{ display: "flex" }}>
                                      <h3>{item["chatTitle"] || ""}</h3>
                                      <h3>
                                        &ensp;
                                        {item["members"].length > 2
                                          ? "+  " + (item["members"].length - 2)
                                          : null}
                                      </h3>
                                    </div>
                                    <div>
                                      {body && (
                                        <p>{`${body?.slice(0, 100)}${
                                          body?.length > 100 ? "..." : ""
                                        }`}</p>
                                      )}
                                      {date_updated && (
                                        <span className="msg-timestamp-left">
                                          {getFormatDate(date_updated, "LT")}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <CommonPageLoader />
                        )}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={pastSessions.length > 0} />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="admin">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {/* <InfiniteScrollComponent
                          totalSize={100}
                          currentDataSize={adminMessages?.length}
                          handleApi={}
                        > */}
                        {!isMessageListLoading ? (
                          adminMessages.map((item) => {
                            const { from, body, date_updated } = item.message;

                            let lastUserProfilePic =
                              item["members"]?.filter(
                                ({ userId }) => userId === from
                              )[0] ||
                              item["members"][0] ||
                              {};
                            return (
                              <div className="contact_item">
                                <div className="inner_link">
                                  {/* <img
                                  src={
                                    lastUserProfilePic?.profilePicture || Jenny
                                  }
                                  alt={`${lastUserProfilePic?.userName} profile`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = Jenny;
                                  }}
                                /> */}
                                  <UserAvatar
                                    {...lastUserProfilePic}
                                    className="img-md-2"
                                  />
                                  <div
                                    className="message_link_notify"
                                    onClick={() =>
                                      PopulateContacts(
                                        item["channelUniqueName"],
                                        item["members"],
                                        item
                                      )
                                    }
                                  >
                                       <div style={{display:"flex"}}>
                                    <h3>{item["chatTitle"] || ""}</h3>
                                    <h3>
                                      &ensp;
                                      {item["members"].length > 2
                                        ? "+  " + (item["members"].length - 2)
                                        : null}
                                    </h3>
                                    </div>
                                    <div>
                                      {body && (
                                        <p>{`${body?.slice(0, 100)}${
                                          body?.length > 100 ? "..." : ""
                                        }`}</p>
                                      )}
                                      {date_updated && (
                                        <span className="msg-timestamp-left">
                                          {getFormatDate(date_updated, "LT")}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <CommonPageLoader />
                        )}
                        {/* </InfiniteScrollComponent> */}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={adminMessages.length > 0} />
                      </div>
                    </div>
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
const RightChat = (props) => {
  return (
    <>
      <div className="message_chat_right">
        <div className="message_text">
          <h5>{props.data}</h5>
        </div>

        <img src={Jonn} alt="icon" />
      </div>
    </>
  );
};
// const LeftChat = (props) => {
//     return (
//         <>
//             <div className="message_chat_right">
//                 <div className="message_text">
//                     <h5>{props.data}</h5>
//                 </div>

//                 <img src={Jonn} alt="icon" />
//             </div>
//         </>
//     );
// };

const mapStateToProps = (state) => ({
  clientData: state.messagingReducer.clientData,
  activeChannel: state.messagingReducer.activeChannel,
  activeChannelMessages: state.messagingReducer.activeChannelMessages,
  typingMembers: state.messagingReducer.typingMembers,
  chatClientInstance: state.messagingReducer.chatClientInstance,
  pastSessions: state.messagingReducer.pastSessions,
  upcomingSessions: state.messagingReducer.upcomingSessions,
  adminMessages: state.messagingReducer.adminMessages,
  invitedSessions: state.messagingReducer.invitedSessions,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerChannel,
      initClientDispatch,
      updateMessagingDetails,
      unSubscribeAct: unSubscribeFromChannel,
      unSubscribeClientAct: unSubscribeFromClient,
    },
    dispatch
  );
};

const TrainerMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerMessageClass);

export default TrainerMessage;
