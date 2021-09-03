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
import { trainerChannel, adminChannel } from "action/trainerAct";
import { change_login_status } from "action/NotificationAct";
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
  updateMessageUnReadCount,
} from "action/messagingAct";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { InfiniteScrollComponent } from "component/common/Scrollbars";
import { history } from "helpers";
import { MessageComponent } from "../MessageComponent/MessageComponent";
import { useParams } from "react-router-dom";
import IdleTimer, { useIdleTimer } from "react-idle-timer/dist/modern";

const TrainerMessageClass = ({
  trainerChannel,
  adminChannel,
  initClientDispatch,
  clientData,
  activeChannel,
  activeChannelMessages,
  typingMembers,
  chatClientInstance,
  updateMessagingDetails,
  pastSessions,
  upcomingSessions,
  requestedSessions,
  adminMessages,
  userMessages,
  trainerMessages,
  invitedSessions,
  unSubscribeAct,
  unSubscribeClientAct,
  change_login_status,
  updateMessageUnReadCountAct,
}) => {
  const isUser = parseInt(localStorage.getItem("type")) === 3;

  const isAdmin = parseInt(localStorage.getItem("type")) === 1;

  const { type } = useParams();

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

  const [currentTab, setCurrentTab] = useState(
    isAdmin ? "trainer" : "upcoming"
  );

  // Make Id dynamic
  useEffect(() => {
    // Get Contact_list

    change_login_status({ loginStatus: true });

    window.scrollTo(0, 0);

    const { search } = history.location;

    const tempCurrentTab = search.split("=")[1];

    const channelID = search.split("channelId=")[1];

    let mql = window.matchMedia("(max-width: 700px)");

    initClientDispatch(channelID, () => {
      setMessageListLoading(false);
    });

    // handleTabChange(isUser ? "invited" : "upcoming");

    return () => {
      if (!mql.matches) unSubscribeClientAct();
      change_login_status({ loginStatus: false });
    };
  }, []);

  useEffect(() => {
    // console.log(history.location);

    const { search } = history.location;

    const tempCurrentTab = search.split("=")[1];

    const channelID = search.split("channelId=")[1];

    // console.log(type, search);

    type && setCurrentTab(type);

    // console.log(channelID, adminMessages);

    // tempCurrentTab &&
    //   currentTab !== tempCurrentTab &&
    //   setCurrentTab(tempCurrentTab);
  }, [history.location]);

  useEffect(() => {
    getChannelDetails(currentTab);
  }, [pageData]);

  const getChannelDetails = (tab) => {
    if (isAdmin) return getAdminChannelDetails();

    const { search } = history.location;

    const channelID = search.split("channelId=")[1];
    trainerChannel(tab, pageData[tab])
      .then((data) => {
        let sessionTypeData = {
          invited: "invitedSessions",
          upcoming: "upcomingSessions",
          past: "pastSessions",
          admin: "adminMessages",
          requested: "requestedSessions",
        };

        let currentSession = sessionTypeData[tab];

        setMessageListLoading(false);

        let updatedData = [...data].map((channelData) => {
          let currentMember = channelData.members.filter(
            ({ userId }) => userId === localStorage.getItem("user-id")
          )[0];

          let tempChannelData = {
            ...channelData,
            unReadCount: currentMember?.readCount || 0,
          };

          return tempChannelData;
        });

        let reduxData = {
          [currentSession]: [...updatedData],
        };

        if (type && channelID) {
          let currentTypeData =
            [...reduxData[sessionTypeData[type]]].filter(
              ({ channelId }) => channelId === channelID
            )[0] || {};

          if (currentTypeData.channelId) {
            let reduxData = {
              currentChannelMembers: [...currentTypeData?.members],
              channelData: currentTypeData,
            };
            // console.log(reduxData);

            updateMessagingDetails(reduxData);
          }
        }

        updateMessagingDetails(reduxData);
      })
      .catch((err) => {
        setMessageListLoading(false);
        // Toast({ type: "error", message: err.message || "error" });
      });
  };

  const getAdminChannelDetails = () => {
    adminChannel()
      .then((data) => {
        const { trainersArray = [], usersArray = [] } = data || {};

        const { search } = history.location;

        // const tempCurrentTab = search.split("=")[1];

        let reduxData = {
          userMessages: [...usersArray],
          trainerMessages: [...trainersArray],
        };

        setMessageListLoading(false);

        // updateMessagingDetails(reduxData);

        const channelSID = search.split("channelId=")[1];

        if (channelSID) {
          let currentTabData = {
            trainer: "trainerMessages",
            user: "userMessages",
          };

          let selectedRole = currentTabData[type];

          // console.log(
          //   reduxData[selectedRole],
          //   selectedRole,
          //   currentTabData,
          //   tempCurrentTab
          // );

          let selectedUser =
            reduxData[selectedRole].filter(
              ({ channelId }) => channelId === channelSID
            )[0] || {};

          reduxData = {
            ...reduxData,
            currentChannelMembers: selectedUser?.members,
            channelData: selectedUser,
          };
          // console.log(reduxData);
        }

        updateMessagingDetails(reduxData);
      })
      .catch((err) => {
        console.log(err);

        Toast({ type: "error", message: err.message || "Error" });
      });
  };

  const handleUnreadCount = (unReadCount, channelData) => {
    // console.log(channelData);

    const currentChannelId = channelData.channelId;

    let payload = {
      channelSid: currentChannelId,
      unRead: unReadCount,
      userId: localStorage.getItem("user-id"),
    };

    if (payload.channelSid && payload.userId) {
      console.log(payload);
      updateMessageUnReadCountAct(payload, currentTab);
    }
  };

  function PopulateContacts(channelID, members, channelData) {
    let mql = window.matchMedia("(max-width: 700px)");

    chatClientInstance
      .joinChannelByID(channelID)
      .then(() => {
        let reduxData = {
          currentChannelMembers: members,
          channelData,
        };

        if (channelData.unReadCount > 0) handleUnreadCount(0, channelData);
        // console.log(reduxData);

        updateMessagingDetails(reduxData);

        if (mql.matches) history.push("/mobiles/chat");
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        console.log(err);
      });
  }

  const handleScrollChange = () => {};

  function handleTabChange(tab, initial = false) {
    const tempType = type;
    const { search } = history.location;

    // console.log(tab, tempType);
    let currentPathname = window.location.pathname;

    let currentTabTitle = "";

    if (currentPathname.includes("admins")) {
      currentTabTitle = currentPathname.split("/")[3] || "";
    } else {
      currentTabTitle = currentPathname.split("/")[4] || "";
    }

    if (isAdmin) {
      tab !== currentTabTitle && history.push(`/admins/message/${tab}`);
    } else {
      tab !== currentTabTitle &&
        history.push(
          `/${isUser ? "users" : "trainers"}/dashboard/message/${tab}`
        );
    }

    setCurrentTab(tab);

    setMessageListLoading(true);

    unSubscribeAct();

    getChannelDetails(tab);
  }

  const handleOnActive = (event) => {
    console.log("user is active");
    if (localStorage.getItem("token") !== null) {
      change_login_status({ loginStatus: true });
    }
  };

  const handleOnIdle = (event) => {
    console.log("user is idle");

    if (localStorage.getItem("token") !== null) {
      change_login_status({ loginStatus: false });
    }
  };

  let idleTimer = null;

  return (
    <>
      <div className="main_message_container">
        <IdleTimer
          ref={(ref) => {
            idleTimer = ref;
          }}
          timeout={10000}
          onActive={handleOnActive}
          onIdle={handleOnIdle}
          //onAction={handleOnAction}
          debounce={250}
        />
        <div className="message_outter_container">
          <h2>Messages</h2>
          <div className="message_inner">
            <div className="message_wrapper">
              <Tabs
                defaultTab={currentTab}
                onChange={(tab) => {
                  console.log(tab);

                  handleTabChange(tab);
                }}
              >
                <TabList>
                  {!isAdmin ? (
                    <>
                      <Tab tabFor="upcoming">Upcoming</Tab>
                      {isUser && <Tab tabFor="invited">Invited</Tab>}
                      <Tab tabFor="past">Previous</Tab>
                      <Tab tabFor="admin">Admin</Tab>
                      <Tab tabFor="requested">Requests</Tab>
                    </>
                  ) : (
                    <>
                      <Tab tabFor="trainer">Trainers</Tab>
                      <Tab tabFor="user">Users</Tab>
                    </>
                  )}
                </TabList>
                <div className="message_inner">
                  <TabPanel tabId="invited">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={invitedSessions}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>

                  <TabPanel tabId="upcoming">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={upcomingSessions}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>
                  <TabPanel tabId="past">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={pastSessions}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>
                  <TabPanel tabId="admin">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={adminMessages}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>
                  <TabPanel tabId="requested">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={requestedSessions}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>

                  {/* User Message Tab */}

                  <TabPanel tabId="user">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={userMessages}
                      PopulateContacts={PopulateContacts}
                    />
                  </TabPanel>

                  {/* User Message Tab */}

                  <TabPanel tabId="trainer">
                    <MessageComponent
                      isMessageListLoading={isMessageListLoading}
                      messageData={trainerMessages}
                      PopulateContacts={PopulateContacts}
                    />
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
  requestedSessions: state.messagingReducer.requestedSessions,
  adminMessages: state.messagingReducer.adminMessages,
  userMessages: state.messagingReducer.userMessages,
  trainerMessages: state.messagingReducer.trainerMessages,
  invitedSessions: state.messagingReducer.invitedSessions,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerChannel,
      adminChannel,
      initClientDispatch,
      updateMessagingDetails,
      unSubscribeAct: unSubscribeFromChannel,
      unSubscribeClientAct: unSubscribeFromClient,
      change_login_status,
      updateMessageUnReadCountAct: updateMessageUnReadCount,
    },
    dispatch
  );
};

const TrainerMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerMessageClass);

export default TrainerMessage;
