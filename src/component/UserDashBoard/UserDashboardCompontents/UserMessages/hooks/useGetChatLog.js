import { useEffect, useState } from "react";
import { Client } from "@twilio/conversations";

function useGetChatLog() {
  // State variables
  const [chatLogData, setChatLogData] = useState([]);

  const token = localStorage.getItem("token");
  const [chatToken, setchatToken] = useState("");
  // const [client, setClient] = useState(null);
  const [channelListData, setChannelListData] = useState([]);

  // Async functions
  async function initConversations(client) {
    
    try
    {
      await client.getConversationBySid("CHe796432a1eff4dd381f6c49bbcba5f94")
    }
    catch
    {
      console.log("rr");
     
    }
   
   
  }

  //Effect functiosn
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

  useEffect(() => {
    if (chatToken !== "") {
      const client = new Client(chatToken);
      client.on("connectionStateChanged", (state) => {
        if (state === "connected") {
          
          console.log("connected");
        }
      });

      initConversations(client);

      // client.on("stateChanged", (state) => {
      //   if (state === "initialized") {
      //     // Use the client
      //     console.log("ini");
      //   }
      // });

      // client
      // .getConversationBySid("CH13a396a49d084625a5e5e434e31559e1")
      // .then((response) => {
      //   console.log(response.getMessages(), "cahnnel");

      //   response.on("messageAdded", (val) => response.getMessages().then(val =>{
      //    val.items.map(msg =>{
      //      console.log(msg.body, "D");
      //    })
      //   }));
      // });

      // client.on("connectionStateChanged", (val) => {
      //   console.log("evenr", client.getConversationBySid("CH13a396a49d084625a5e5e434e31559e1").then(res => res.getMessages ));

      // })
    }
  }, [chatToken]);

  return chatLogData;
}

export default useGetChatLog;
