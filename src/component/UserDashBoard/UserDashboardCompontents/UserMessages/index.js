import React, { useEffect, useState } from "react";
import { Client } from "@twilio/conversations";
import "./styles.scss";
import ChatInput from "./subcomponents/ChatInput";
import ChatList from "./subcomponents/ChatList";
import ChatLog from "./subcomponents/ChatLog";

function MessageComponent() {
  // Constants

  const token = localStorage.getItem("token");
  const [channelListData, setChannelListData] = useState([]);

  // Effect Functions

  useEffect(() => {
    fetch(
      "http://15.206.37.182:2338/v1/channel/conversionList",{
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "CHANNELlIST");
        setChannelListData(data?.data);
      });
  }, []);

  return (
    <div className="message_container">
      <h2>Messages</h2>
      <div className="message_box">
        <div className="message_box_left">
          <ChatList channelListData={channelListData} />
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
