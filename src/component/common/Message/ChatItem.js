import React from "react";
import moment from "moment";

import Jonn from "../../../assets/files/TrainerDashboard/Message/Image 1.png";
import { UserAvatar } from "../UserAvatar";
import Linkify from "react-linkify";

export const ChatItem = ({
  currentChannelMembers = [],
  currMsg: { type, state, date },
}) => {
  let CurrentMessageComponent;

  const linkDecorator = (decoratedHref, decoratedText, key) => (
    <a
      href={decoratedHref}
      key={key}
      target="_blank"
      role="noopener noreferrer"
    >
      {decoratedText}
    </a>
  );

  if (type === "message") {
    let msgCreatedDate = moment(state.timestamp);

    let msgTime = msgCreatedDate.format("LT");

    const isMyMsg = state?.author === localStorage.getItem("user-id");

    const currentChatItemOwner =
      currentChannelMembers.filter(
        ({ userIdenity }) => userIdenity === state.author
      )[0] || {};

    CurrentMessageComponent = (
      <div className={`message_chat_${isMyMsg ? "right" : "left"}`}>
        <div className="message_text">
          <Linkify componentDecorator={linkDecorator}>
            <h5>{state?.body || ""}</h5>
          </Linkify>
          <span className="msg-time">{msgTime}</span>
        </div>

        <UserAvatar {...currentChatItemOwner} />
      </div>
    );
  } else {
    CurrentMessageComponent = (
      <div className="w-100 d-flex align-items-center justify-content-center my-3">
        <span className="info-badge">{date}</span>
      </div>
    );
  }

  return <div>{CurrentMessageComponent}</div>;
};
