import React, { useEffect, useState } from "react";
import { Client } from "@twilio/conversations";

function ChatParent() {

  
  const bToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NWYyNjI5LTgxNTUtNDQ2OS04OGVjLTBmZWQzM2Q3NTk5NSIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjQzNTU4MTUwLCJleHAiOjE2NTEzMzQxNTB9.Bgv9fB0e4GjLVWZDm6YP_f5wMGAQN_83hgFHFeD1mrk"

  const [chatToken, setchatToken] = useState("");

  const [txt, settxt] = useState("");

  useEffect(() => {
    fetch(
      "http://15.206.37.182:2338/v2/token",

      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: bToken,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setchatToken(data?.chatToken);
      });

    fetch(
      "http://15.206.37.182:2338/v1/channel/conversionList",

      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: bToken,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "CHANNELlIST");
        // setchatToken(data?.chatToken);
      });
  }, []);

  useEffect(() => {
    if (chatToken !== "") {
      const client = new Client(chatToken);

      // client.on("stateChanged", (state) => {
      //   if (state === "initialized") {
      //     // Use the client
      //     console.log("ini");
      //   }
      // });

      // client.getSubscribedConversations().then((response) => {
      //   console.log(response);
      //   response?.items?.map((item) => {
      //     //  console.log(item?.channelState?.dateCreated);
      //   });
      // });

      client.on("connectionStateChanged", state => console.log(state,"pp"))

      client
        .getConversationBySid("CH13a396a49d084625a5e5e434e31559e1")
        .then((response) => {
          console.log(response.getMessages(), "cahnnel");

          response.on("messageAdded", (val) => response.getMessages().then(val =>{
           val.items.map(msg =>{
             console.log(msg.body, "D");
           })
          }));
        });

      //   client.on("conversationAdded", (conversation) => {
      //    console.log("d",conversation);
      //   });
    }
  }, [chatToken]);
  return (
    <div>
      <input
       
        onChange={(e) => {

          
          const client = new Client(chatToken);

          client
            .getConversationBySid("CH13a396a49d084625a5e5e434e31559e1")
            .then((response) => {
              console.log(response.sendMessage(e.target.value), "cahnnel");
            });
        }}
      ></input>
      <button>Send</button>
    </div>
  );
}

export default ChatParent;
