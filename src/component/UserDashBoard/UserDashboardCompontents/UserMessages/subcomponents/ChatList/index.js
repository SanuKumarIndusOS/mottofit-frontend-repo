import React from "react";
import ChatListItem from "../ChatListItem";
import "./styles.scss";


function ChatList({ channelListData }) {
  React.useEffect(() => {
    console.log("d", channelListData);
  }, [channelListData]);

  return (
    <div className="chat_list_container">
      {channelListData?.length !== 0 ? (
        <div>
          {channelListData?.map((item, key) => {
            return <ChatListItem />;
          })}
        </div>
      ) : (
        <p>No Contacts</p>
      )}
    </div>
  );
}

export default ChatList;
