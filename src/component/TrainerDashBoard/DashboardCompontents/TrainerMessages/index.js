import React, { useState, useEffect, useRef } from "react";
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
} from "action/messagingAct";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";
const Chatt = require("twilio-chat");

const TrainerMessageClass = ({
  trainerChannel,
  initClientDispatch,
  clientData,
  activeChannel,
  activeChannelMessages,
  typingMembers,
  chatClientInstance,
  updateMessagingDetails,
}) => {
  const [individual_list, setIndividual] = useState([]);
  const [socialGroup_list, setSocialGroup_list] = useState([]);
  const [admin_list, setAdmin_list] = useState([]);
  const [Channel, setChannel] = useState([]);
  const [Client, setClient] = useState();
  const [messages, setMessages] = useState([]);
  const [text_thread, setText_thread] = useState([]);
  const [chattoken, setToken] = useState("");
  const [channel_id, setChannel_id] = useState("");

  // Make Id dynamic
  useEffect(() => {
    // Get Contact_list

    initClientDispatch();

    trainerChannel().then((data) => {
      setIndividual(data.individualClient);
      setSocialGroup_list(data.socialGroups);
      setAdmin_list(data.admins);
    });

    return () => {
      chatClientInstance && chatClientInstance.removeChatClient();
    };
  }, []);

  function PopulateContacts(channelID, members, channelData) {
    console.log(channelID, chatClientInstance);

    // "CH15f50302975a435799691ca5f8d71092";
    chatClientInstance.joinChannelByID(channelID).then(() => {
      console.log("Channel Loaded");

      let reduxData = {
        currentChannelMembers: members,
        channelData,
      };

      updateMessagingDetails(reduxData);
    });
  }

  function handleTabChange() {
    chatClientInstance && chatClientInstance.unSubscribeChannel();
  }

  const isUser = parseInt(localStorage.getItem("type")) === 3;

  return (
    <>
      <div className="main_message_container">
        <div className="message_outter_container">
          <h2>Messages</h2>
          <div className="message_inner">
            <div className="message_wrapper">
              <Tabs defaultTab="one">
                <TabList>
                  <Tab tabFor="one" onClick={handleTabChange}>
                    All
                  </Tab>
                  {!isUser && (
                    <Tab tabFor="two" onClick={handleTabChange}>
                      INDIVIDUAL CLIENTS
                    </Tab>
                  )}
                  <Tab tabFor="three" onClick={handleTabChange}>
                    SOCIAL GROUPS
                  </Tab>
                  <Tab tabFor="four" onClick={handleTabChange}>
                    ADMIN
                  </Tab>
                </TabList>
                <div className="message_inner">
                  <TabPanel tabId="one">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {[
                          ...individual_list,
                          ...socialGroup_list,
                          ...admin_list,
                        ].map((item, index) => {
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
                                {/* {JSON.stringify(lastUserProfilePic)} */}

                                <UserAvatar {...lastUserProfilePic} />

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
                                  <h3>{item["chatTitle"] || ""}</h3>
                                  <div>
                                    {body && <p>{body}</p>}
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
                        })}
                      </div>
                      <div className="message_right">
                        <ChatBox
                          isDataPresent={
                            [
                              ...individual_list,
                              ...socialGroup_list,
                              ...admin_list,
                            ].length > 0
                          }
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel tabId="two">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {individual_list.map((item, index) => {
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
                                <UserAvatar {...lastUserProfilePic} />
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
                                  <h3>{item["chatTitle"] || ""}</h3>
                                  <div>
                                    {body && <p>{body}</p>}
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
                        })}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={individual_list.length > 0} />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="three">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {socialGroup_list.map((item, index) => {
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
                                <UserAvatar {...lastUserProfilePic} />
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
                                  <h3>{item["chatTitle"] || ""}</h3>
                                  <div>
                                    {body && <p>{body}</p>}
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
                        })}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={socialGroup_list.length > 0} />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="four">
                    <div className="message_inner_one">
                      <div className="message_left">
                        {/* Todo Change to ALL */}
                        {admin_list.map((item) => {
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
                                <UserAvatar {...lastUserProfilePic} />
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
                                  <h3>{item["chatTitle"] || ""}</h3>
                                  <div>
                                    {body && <p>{body}</p>}
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
                        })}
                      </div>
                      <div className="message_right">
                        <ChatBox isDataPresent={admin_list.length > 0} />
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
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerChannel,
      initClientDispatch,
      updateMessagingDetails,
    },
    dispatch
  );
};

const TrainerMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerMessageClass);

export default TrainerMessage;
