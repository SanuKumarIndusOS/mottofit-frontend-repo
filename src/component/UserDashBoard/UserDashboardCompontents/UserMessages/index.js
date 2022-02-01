import React, { useEffect, useState } from "react";
import { Client } from "@twilio/conversations";
import "./styles.scss";
import ChatInput from "./subcomponents/ChatInput";
import ChatList from "./subcomponents/ChatList";
import ChatLog from "./subcomponents/ChatLog";
import useGetChatLog from "./hooks/useGetChatLog";
import chatConv from "./hooks/sampfunc";



// TODO:
// 1 Initialize client and chat-token on top level

function MessageComponent() {
  // Constants

  const token = localStorage.getItem("token");
  const [chatToken, setchatToken] = useState("");
  // const [client, setClient] = useState(null);
  const [channelListData, setChannelListData] = useState([]);
  

  //  const chatLogData = useGetChatLog();

  // Effect Functions
 useEffect(() => {
  fetch(
    "http://15.206.37.182:2338/v2/token",

    {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      setchatToken(data?.chatToken);
      chatConv(data?.chatToken)
    });


    fetch("http://15.206.37.182:2338/v1/channel/conversionList", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChannelListData(data?.data);
        console.log(data);
      });
  
 
 }, []);
 
 

  // Update functions

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
