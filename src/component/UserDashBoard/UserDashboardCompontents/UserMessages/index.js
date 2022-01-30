import React from "react";
import "./styles.scss";
import ChatInput from "./subcomponents/ChatInput";
import ChatList from "./subcomponents/ChatList";
import ChatLog from "./subcomponents/ChatLog";

function MessageComponent() {
  return (
    <div className="message_container">
      <h2>Messages</h2>
      <div className="message_box">
        <div className="message_box_left">
          <ChatList />
        </div>
        <div className="message_box_right">
          <ChatLog />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
