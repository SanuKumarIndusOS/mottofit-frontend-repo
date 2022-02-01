import React from "react";
import "./styles.scss";

function ChatLog() {
  // TODO:
  // 1 Extract log_item into seperate component
  // 2 Date pill
  // 3 Chat log header with basic info
  // 4 Responsive

  return (
    <div className="chat_log_container">
      <div className="log_item">
        <div className="avatar"></div>
        <div className="log_box"><p>lorem ipsum </p></div>
      </div>

      <div className="log_item reciever">
        <div className="avatar"></div>
        <div className="log_box "></div>
      </div>
    </div>
  );
}

export default ChatLog;
