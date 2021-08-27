import React, { Component } from "react";

import LocationIcon from "../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import SheduleIcon from "../../../assets/files/TrainerDashboard/Message/Shedule Icon.svg";
import AvailabilityIcon from "../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import BlueHoverButton from "../BlueArrowButton";

import { ChatItem } from "./ChatItem";
import { bindActionCreators } from "redux";
import { trainerChannel } from "action/trainerAct";
import { send_unread_notification } from "action/NotificationAct";
import { connect } from "react-redux";
import { getFormatDate } from "service/helperFunctions";
import { TextFormatSharp } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

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
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props, prevProps);
    if (
      this.props.activeChannelMessages.length !==
      prevProps.activeChannelMessages.length
    ) {
      this.scrollToMessageListBottom();
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

    // temp = [];
  }

  scrollToMessageListBottom = () => {
    this.messagesEndRef.current?.scrollTo(
      0,
      this.messagesEndRef.current?.scrollHeight
    );
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
      activeChannel.sendMessage(String(message)).then(() => {
        this.setState({
          message: "",
        });
        this.scrollToMessageListBottom();
        this.unread();
      });
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
    } = this.props;

    const { message } = this.state;

    const tempMsg = this.formatMessage(activeChannelMessages);

    const messages = activeChannelMessages;

    if (!isDataPresent)
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          {!isLoading ? <h3>No New Messages</h3> : ""}
        </div>
      );
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
                        <BlueHoverButton />
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
    },
    dispatch
  );
};

const ChatBox = connect(mapStateToProps, mapDispatchToProps)(ChatBoxClass);

export default withRouter(ChatBox);
