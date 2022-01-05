import React, { Component } from "react";

import LocationIcon from "../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import SheduleIcon from "../../../assets/files/TrainerDashboard/Message/Shedule Icon.svg";
import AvailabilityIcon from "../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import BlueHoverButton from "../BlueArrowButton";
import BlueHoverBtn from "../BlueArrowButton/BlueArrowBtn";

import { ChatItem } from "./ChatItem";
import { bindActionCreators } from "redux";
import { trainerChannel } from "action/trainerAct";
import { send_unread_notification } from "action/NotificationAct";
import { connect } from "react-redux";
import { getFormatDate } from "service/helperFunctions";
import { TextFormatSharp } from "@material-ui/icons";
import { withRouter, Link } from "react-router-dom";
import {
  unSubscribeFromChannel,
  updateMessageUnReadCount,
} from "action/messagingAct";

class ChatBoxClass extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    this.messagesEndRef = React.createRef();
    this.state = {
      message: "",
      members: [],
    };

    this.inputRef = React.createRef();
  }

  goBack() {
    this.props.history.goBack();

    this.props.unSubscribeFromChannel();
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props, prevProps);
    if (
      this.props.activeChannelMessages.length !==
      prevProps.activeChannelMessages.length
    ) {
      this.scrollToMessageListBottom();
      this.inputRef?.current &&
        this.inputRef?.current?.focus &&
        this.inputRef?.current?.focus();
      // console.log("hrllo");
    }
    if (this.props.isLoading === false && prevProps.isLoading === true) {
      setTimeout(() => {
        this.scrollToMessageListBottom();
        // console.log(this.inputRef);

        this.inputRef?.current &&
          this.inputRef?.current?.focus &&
          this.inputRef?.current?.focus();

        // console.log("hrllo", this.props.isLoading, prevProps.isLoading);
      }, 100);
    }
  }

  componentDidMount() {
    this.scrollToMessageListBottom();
    // this.handleUnreadCount(0);
    // temp = [];
  }

  scrollToMessageListBottom = () => {
    this.messagesEndRef.current?.scrollTo(
      0,
      this.messagesEndRef.current?.scrollHeight
    );

    this.inputRef?.current &&
      this.inputRef?.current?.focus &&
      this.inputRef?.current?.focus();
  };

  handleChange = ({ target: { value } }) => {
    const { activeChannel } = this.props;

    this.setState({
      message: value,
    });
    activeChannel && activeChannel.typing();
  };

  handleSendMessage = (e) => {
    e.preventDefault();

    const { message } = this.state;

    const { activeChannel } = this.props;

    if (!activeChannel) {
      return console.log("Chat Service is not configured.");
    }

    if (activeChannel && message !== "") {
      this.setState({
        message: "",
      });
      activeChannel.sendMessage(String(message)).then(() => {
        this.scrollToMessageListBottom();
        this.unread();
      });
    }
  };

  handleUnreadCount = (unReadCount) => {
    const currentChannelId = this.props.channelData.channelId;

    let payload = {
      channelSid: currentChannelId,
      unRead: unReadCount,
      userId: localStorage.getItem("user-id"),
    };

    let currentPathname = window.location.pathname;

    let currentTabTitle = "";

    if (currentPathname.includes("admins")) {
      currentTabTitle = currentPathname.split("/")[3] || "";
    } else {
      currentTabTitle = currentPathname.split("/")[4] || "";
    }

    if (payload.channelSid && payload.userId) {
      // console.log(payload);
      this.props.updateMessageUnReadCountAct(payload, currentTabTitle);
    }
  };

  formatMessage = (messages = []) => {
    var lastMsgDate = "";
    let formattedMessage = messages.reduce((prevMsgArray, currMsg) => {
      let tempPrevMsgArray = [...prevMsgArray];

      const { timestamp } = currMsg.state;

      let currYear = getFormatDate(null, "YYYY");

      let msgYear = getFormatDate(timestamp, "YYYY");

      let tempMsgDate = getFormatDate(timestamp, "MMMM DD");

      let msgDate =
        currYear === msgYear ? tempMsgDate : `${tempMsgDate}, ${msgYear}`;

      if (lastMsgDate === msgDate) {
        tempPrevMsgArray = [
          ...tempPrevMsgArray,
          { type: "message", ...currMsg },
        ];
      } else {
        lastMsgDate = msgDate;
        tempPrevMsgArray = [
          ...tempPrevMsgArray,
          { type: "timestamp", date: msgDate },
          { type: "message", ...currMsg },
        ];
      }

      return tempPrevMsgArray;
    }, []);

    return formattedMessage;
  };

  unread = () => {
    var temp = [];

    //console.log("hit");

    this.setState(
      {
        members: this.props.currentChannelMembers,
      },
      () => {
        this.handleUnreadCount(1);

        let rec = this.state.members.filter((item) => {
          return item.memberIdenity !== localStorage.getItem("user-id");
        });

        temp = rec.map((item) => {
          return item.userId;
        });

        this.props.send_unread_notification({
          recepients: temp,
        });
      }
    );
  };

  handleKeyUp = (evt) => {
    // console.log(evt.keyCode, evt.shiftKey);

    if (evt.keyCode == 13 && !evt.shiftKey) {
      // console.log("Enter pressed");

      this.handleSendMessage(evt);

      // evt.preventDefault();
    }
  };

  render() {
    const {
      activeChannelMessages = [],
      typingMembers = [],
      currentChannelMembers = [],
      isLoading = false,
      activeChannel = {},
      channelData = {},
      isDataPresent = false,
      type: currentTab,
    } = this.props;

    const { message } = this.state;

    const tempMsg = this.formatMessage(activeChannelMessages);

    const messages = activeChannelMessages;

    const currentLoggedInUser = localStorage.getItem("user-id");

    const trainerId = channelData?.trainerId;

    // check whether currently logged in user is trainer
    const isTrainer = trainerId === currentLoggedInUser;

    const trainerName =
      currentChannelMembers.filter(({ userId }) => userId === trainerId)[0]
        ?.userName || {};

    const userName =
      currentChannelMembers.filter(({ userId }) => userId !== trainerId)[0]
        ?.userName || {};

    if (!isDataPresent)
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          {!isLoading ? <h3>No New Messages</h3> : ""}
        </div>
      );

    let redirectURL = "";

    
                let trainerFullname = `${trainerName}`.replace(" ","-");

    let encodedName = trainerFullname.toLocaleLowerCase();

    if (!isTrainer) {
      redirectURL = `/trainer/profile/${trainerId}/${encodedName}`;
    } else {
      redirectURL = `/trainers/dashboard/schedule`;
    }
    return (
      <div className="message_right_chatarea">
        {activeChannel?.sid ? (
          <>
            {!isLoading ? (
              <>
                <div className="mobile_chat_header">
                  <h2 style={{ textTransform: "Capitalize" }}>
                    {channelData?.chatTitle || "Title"}
                  </h2>
                  <h1 onClick={this.goBack}>&#8249;</h1>
                
                </div>
                   
                <div className="message_right_header">
                  
                {window.location.search === "?requested" && (
                    <div className="requested-session-block">
                      <p className="text-secondary fs-14">
                        <Link to={redirectURL}>
                          <span className="text-primary text-underline cursor-pointer">
                            Click here
                          </span>
                        </Link>
                        {!isTrainer ? (
                          <>
                            <span>{` to book your session with `}</span>
                            <span>{`${trainerName} once you both have agreed on a day & time.`}</span>
                          </>
                        ) : (
                          <span>{`, to open up the time slot when you have confirmed a day & time with ${userName}`}</span>
                        )}
                      </p>
                    </div>
                  )}
  
              
                  <h2 style={{ textTransform: "Capitalize" }}>
                    {channelData?.chatTitle || "Title"}
                  </h2>
                  <div className="message_header_times">
                    <div className="message_header_items">
                      <img src={SheduleIcon} alt="icon" />
                      <h5>
                        {getFormatDate(
                          channelData?.startTime,
                          "ddd MMM DD YYYY",
                          true
                        )}
                      </h5>
                    </div>
                    <div className="message_header_items">
                      <img src={AvailabilityIcon} alt="icon" />
                      <h5>
                        {getFormatDate(channelData?.startTime, "hh:mm A", true)}
                      </h5>
                    </div>
                    <div className="message_header_items">
                      <img src={LocationIcon} alt="icon" />
                      <h5>{channelData?.venue}</h5>
                    </div>
                  </div>
                  {currentTab === "requested" && (
                    <div className="requested-session-block">
                      <p className="text-secondary fs-14">
                        <Link to={redirectURL}>
                          <span className="text-primary text-underline cursor-pointer">
                            Click here
                          </span>
                        </Link>
                        {!isTrainer ? (
                          <>
                            <span>{` to book your session with `}</span>
                            <span>{`${trainerName} once you both have agreed on a day & time.`}</span>
                          </>
                        ) : (
                          <span>{`, to open up the time slot when you have confirmed a day & time with ${userName}`}</span>
                        )}
                      </p>
                    </div>
                  )}
                  <p>
                    {typingMembers.length > 0 && (
                      <span className="ml-auto text-primary fw-600">{`${typingMembers.toString()} ${
                        typingMembers.length > 1 ? "are" : "is"
                      } typing...`}</span>
                    )}
                  </p>
                </div>
                <div
                  className="message_right_textarea"
                  ref={this.messagesEndRef}
                >
                  
                  {tempMsg?.length > 0 ? (
                    tempMsg.map((item, index) => {
                      return (
                        <ChatItem
                          item={item}
                          currentChannelMembers={currentChannelMembers}
                          key={`${Date.now()}_${index}`}
                          currMsg={item}
                        />
                      );
                    })
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="info-badge">No message</span>
                    </div>
                  )}
                  <div id="end-message" />
                </div>
                <form className="w-100" onSubmit={this.handleSendMessage}>
                  <div className="message_right_input">
                    <textarea
                      type="text"
                      placeholder="Type your message here.."
                      value={message}
                      onChange={this.handleChange}
                      onKeyDown={this.handleKeyUp}
                      onKeyPress={this.handleKeyUp}
                      ref={this.inputRef}
                    />
                    <div
                      className="submit-btn-block"
                      onClick={this.handleSendMessage}
                    >
                      <button className="transparent-btn">
                        {/* <BlueHoverButton /> */}
                        <BlueHoverBtn />
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <span className="info-badge">{`${
                  isLoading ? "Loading..." : "Connecting..."
                }`}</span>
              </div>
            )}
          </>
        ) : (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <span className="info-badge">{`${
              isLoading ? "Loading..." : "Select a chat to start messaging"
            }`}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clientData: state.messagingReducer.clientData,
  activeChannel: state.messagingReducer.activeChannel,
  activeChannelMessages: state.messagingReducer.activeChannelMessages,
  typingMembers: state.messagingReducer.typingMembers,
  chatClientInstance: state.messagingReducer.chatClientInstance,
  currentChannelMembers: state.messagingReducer.currentChannelMembers,
  isLoading: state.messagingReducer.isLoading,
  channelData: state.messagingReducer.channelData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerChannel,
      send_unread_notification,
      unSubscribeFromChannel,
      updateMessageUnReadCountAct: updateMessageUnReadCount,
    },
    dispatch
  );
};

const ChatBox = connect(mapStateToProps, mapDispatchToProps)(ChatBoxClass);

export default withRouter(ChatBox);
